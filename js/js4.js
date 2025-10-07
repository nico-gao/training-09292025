// let count = 0;
// for (let i = 0; i < 1000000000; i++) {
//   count++;
// }
// console.log("after for loop");

// console.log("before");
// alert("something is happening");
// console.log("after");

// function foo() {
//   console.log("hello");
// }

// foo();

// console.log("before");
// // async, non-blocking
// setTimeout(() => {
//   console.log("setTimeout callback after 1s");
// }, 1000);
// setTimeout(() => {
//   console.log("setTimeout callback after 0s");
// }, 0);

// console.log("after");

/**
 * event loop
 * mechanism allows js to perform async operations in a non-blocking way
 *
 * call stack
 * keeps track of what is currently being executed
 * web api
 * handles async operations
 * callback queue (micro tasks, macro tasks)
 * maintains the async calls that finish waiting, when the stack is empty, it will push callbacks to the stack
 *
 * micro: promise
 * macro: timeout, fetch request
 */

// function getUser(id, callback) {
//   setTimeout(() => {
//     const user = {
//       id: id,
//       name: "alice",
//     };
//     callback(user);
//   }, 1000);
// }

// function getPosts(userId, callback) {
//   setTimeout(() => {
// const posts = [
//   {
//     id: 1,
//     title: "xxx",
//   },
//   {
//     id: 2,
//     title: "xxx",
//   },
//   {
//     id: 3,
//     title: "xxx",
//   },
// ];
//     callback(posts);
//   }, 1000);
// }

// function getComments(postId, callback) {
//   setTimeout(() => {
// const comments = [
//   {
//     id: 1,
//     title: "xxx",
//   },
//   {
//     id: 2,
//     title: "xxx",
//   },
//   {
//     id: 3,
//     title: "xxx",
//   },
// ];
//     callback(comments);
//   }, 1000);
// }

// // callback hell
// getUser(1, (user) => {
//   // do something about the user
//   console.log(user);
//   getPosts(user.id, (posts) => {
//     getComments(posts[0].id, (comments) => {
//       console.log(comments);
//     });
//   });
// });

// promises
// function getUser(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // reject("something went wrong");
//       resolve({
//         id: id,
//         name: "alice",
//       });
//     }, 2000);
//   });
// }

// function getPosts(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const posts = [
//         {
//           id: 1,
//           title: "xxx",
//         },
//         {
//           id: 2,
//           title: "xxx",
//         },
//         {
//           id: 3,
//           title: "xxx",
//         },
//       ];
//       resolve(posts);
//     }, 1000);
//   });
// }
// function getComments(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const comments = [
//         {
//           id: 1,
//           title: "xxx",
//         },
//         {
//           id: 2,
//           title: "xxx",
//         },
//         {
//           id: 3,
//           title: "xxx",
//         },
//       ];
//       resolve(comments);
//     }, 1000);
//   });
// }

// const user = getUser(1);
// console.log(user);
// user
//   .then(
//     (user) => {
//       console.log(user);
//       return 1;
//       // return new Promise((resolve)=>{
//       //   resolve(1)
//       // });
//     }
//     // (error) => {
//     //   console.log("in .then() ", error);
//     // }
//   )
//   .catch((error) => {
//     console.log("in .catch() ", error);
//   })
//   .then((data) => {
//     console.log(data);
//   });

// getUser(1)
//   .then((user) => {
//     console.log(user);
//     return getPosts(user.id);
//   })
//   .then((posts) => {
//     console.log(posts);
//     return getComments(posts[0].id);
//   })
//   .then((comments) => {
//     console.log(comments);
//   });

// // async/await, syntax sugar
// async function fetchData() {
//   try {
//     const user = await getUser(1); // blocking
//     console.log(1);
//     const posts = await getPosts(user.id);
//     const comments = await getComments(posts[0].id);
//     console.log(user, posts, comments);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("finally");
//   }
// }

// console.log("before async function");
// console.log(fetchData());
// console.log("after async function");

// const userIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const userPromises = userIds.map((id) => getUser(id));
// Promise.all(userPromises).then((value) => {
//   console.log(value);
// });

console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4), 0));

setTimeout(() => {
  console.log(5);
}, 3000);

setTimeout(() => {
  console.log(6);
}, 0);

console.log(7);

/**
 * result: 1, 7, 3, 2, 6, 4, 5
 */
