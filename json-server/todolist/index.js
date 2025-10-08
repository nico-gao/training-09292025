const APIs = () => {
  const getTodos = () => {
    return fetch("http://localhost:3000/todos").then((res) => res.json());
  };

  const createTodo = (newTodo) => {
    return fetch("http://localhost:3000/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };
  return {
    getTodos,
    createTodo,
  };
};

// MVC, model, view, controller
class Model {
  #todos = [];
  constructor() {}

  get todos() {
    return this.#todos;
  }

  set todos(newTodos) {
    this.#todos = newTodos;
  }

  addTodo(newTodo) {
    this.todos = [...this.todos, newTodo]; // immutability
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
    const bindedHandleAddTodo = this.handleAddTodo.bind(this);
    this.view.addBtn.addEventListener("click", bindedHandleAddTodo);

    this.apis.getTodos().then((todos) => {
      console.log(todos);
      this.model.todos = todos;
      console.log(this.model.todos);
      this.render();
    });
  }

  render() {
    this.view.render(this.model.todos);
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
}

const apis = APIs();
const model = new Model();
const view = new View();
const controller = new Controller(model, view, apis);
controller.initialize();
