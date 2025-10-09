const APIs = () => {
  const baseURL = "http://localhost:3000/todos";
  const getTodos = () => {
    return fetch(baseURL).then((res) => res.json());
  };

  const createTodo = (newTodo) => {
    return fetch(baseURL, {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const deleteTodo = (id) => {
    return fetch(`${baseURL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  return {
    getTodos,
    createTodo,
    deleteTodo,
  };
};

// MVC, model, view, controller
class Model {
  #todos = [];
  #onChange = () => {};
  constructor() {}

  get todos() {
    return this.#todos;
  }

  set todos(newTodos) {
    this.#todos = newTodos;
    // update the ui
    this.#onChange();
  }

  addTodo(newTodo) {
    this.todos = [...this.todos, newTodo]; // immutability
  }

  deleteTodo(id) {
    const filteredTodos = this.#todos.filter(
      (todo, index, array) => id !== todo.id
      // id === todo.id ? false : true
    );
    // const filteredTodos = this.#todos.filter((todo, index, array) => {
    //   if (id === todo.id) {
    //     return false;
    //   } else return true;
    // });
    console.log(filteredTodos);
    this.todos = filteredTodos;
  }

  subscribe(callback) {
    this.#onChange = callback;
  }
}

class View {
  constructor() {
    this.input = document.querySelector(".todo__input");
    this.addBtn = document.querySelector(".todo__btn--add");
    this.todoList = document.querySelector(".todo__list");
  }

  render(todos) {
    this.todoList.innerHTML = "";
    todos.forEach((todo) => {
      const todoItem = document.createElement("li");
      todoItem.id = todo.id;
      // todoItem.addEventListener("click", () => {
      //   console.log("event listener on list item");
      // });
      const span = document.createElement("span");
      span.textContent = todo.title;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "delete";
      deleteBtn.classList.add("todo__btn--delete");

      todoItem.appendChild(span);
      todoItem.appendChild(deleteBtn);
      this.todoList.appendChild(todoItem);
    });
  }

  getInputValue() {
    return this.input.value;
  }

  clearInput() {
    this.input.value = "";
  }
}

class Controller {
  constructor(model, view, apis) {
    this.model = model;
    this.view = view;
    this.apis = apis;
  }

  initialize() {
    this.model.subscribe(() => {
      this.view.render(this.model.todos);
    });

    const bindedHandleAddTodo = this.handleAddTodo.bind(this);
    this.view.addBtn.addEventListener("click", bindedHandleAddTodo);

    const bindedHandleDeleteTodo = this.handleDeleteTodo.bind(this);
    this.view.todoList.addEventListener("click", bindedHandleDeleteTodo);

    this.apis.getTodos().then((todos) => {
      console.log(todos);
      this.model.todos = todos;
      console.log(this.model.todos);
    });
  }

  handleAddTodo(event) {
    console.log("button is clicked");
    event.preventDefault();
    console.log("this in handle add", this);
    const inputValue = this.view.getInputValue();

    this.apis.createTodo({ title: inputValue }).then((newTodo) => {
      this.model.addTodo(newTodo);
      this.view.clearInput();
    });
  }

  handleDeleteTodo(event) {
    // console.log(event.target.parentElement.id);

    // console.log(event.target.classList.contains("todo__btn--delete"));

    if (event.target.classList.contains("todo__btn--delete")) {
      const todoId = event.target.parentElement.id;

      this.apis.deleteTodo(todoId).then((deletedTodo) => {
        this.model.deleteTodo(deletedTodo.id);
      });
    }
  }
}

const apis = APIs();
const model = new Model();
const view = new View();
const controller = new Controller(model, view, apis);
controller.initialize();

// event delegation
// capturing
// bubbling
