---
path: "/Asynchronicity-in-JavaScript"
date: 2020-05-26
title: "Asynchronicity in JavaScript"
subtitle: "A guide how to write async code in JS"
tags: "JavaScript"
readtime: 12
template: blogpost
tableOfContents: true
postImage: {
   alt: "Featured photo",
   url: "../images/posts/5/kate-trifo-B1u6zO_sYYU-unsplash.jpg",
   creds: {
      author: {
        name: "Kate Trifo",
        url: "https://unsplash.com/@katetrifo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
      },
      source: {
         name: "Unsplash",
         url: "https://unsplash.com/s/photos/synchronized-swimming?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
      }
   } 
}
postType: "Article"
---

## Introduction

CPU is the main device executing computer programs. The faster it handles code instructions the faster our program runs.

Sometimes our code needs to exchange data over the network or to read files from the disk storage. In this case the lower will be a network communication rate the bigger will be our CPU idle time and the slower our program will execute.

Some programming languages solve this problem by running code on several threads. This kind of approach is called **multithreading** or **concurrency**. A program splits into several sections. They are executing in parallel and synchronize data after finishing.

But this kind of strategy has some limitations. Multithreading introduces extra complexity in code. It's hard to understand what the program is doing at each moment when it runs on several threads. And you can effectively split on threads only certain types of programming tasks.

JavaScript is single-threaded by default. This means that code cannot create new threads and runs in parallel.

Instead of multithreading JavaScript uses **asynchronicity**. After executing a potentially long-running code, the program continues to work and doesn't wait for "long" instruction to be finished. When this instruction ends the code receives a notification and access to "long" operation's result.

## 3 ways to write asynchronous code in JS

There are 3 ways to write asynchronous code in JS:

1. callback functions
2. promises
3. async/await

These methods are numbered by the time of their introduction to JS syntax. 

The oldest one called **callback functions**. It is rarely used today because of its usage inconveniences. The most famous problem is known as the ["callback hell"](http://callbackhell.com/). It comes when you need to use various nested callback functions calls. So the code grows to the right, becomes more unreadable and harder to understanding.

Generally, the most comfortable and elegant way to write asynchronous code in JavaScript now is **async/await**. But, in order to deeply understand the conception of this method, you need to learn the **promises** concept. Async/await is just a wrapper around the promises.

## Promises

The built-in method `fetch` is one of "potentially long-running" JavaScript operations. It requests data from an API and if it has been received successfully, returns a `Response` object, which has methods to handle received data. To convert it to JSON format you can use the `Response.json()` method.

Let's take a look at this kind of `fetch` usage:

```js
(() => {
  let response = fetch('https://jsonplaceholder.typicode.com/todos/1')
  console.log(response.json())
})();
// > TypeError: response.json is not a function
```

> We are using the [IIFE](https://www.simonbliznyuk.com/IIFE-in-JS) (Immediately Invoked Function Expression) in this code. The arrow function runs straight off after the declaration without explicit call. In this case IIFE is using to avoid writing one more line of code with a function call.

This code makes a request to remote API and prints the answer in JSON to the console.

But we get an error because our code runs sequentially and tries to print the result when it has not yet been received. 

`Fetch`, along with the other "long" operations in JavaScript, returns a `Promise` object. This object has no API response yet, but it will definitely eventually get it.

The `Promise` object's instance has 3 kinds of states: 

- `pending` - initial state, promise is waiting for results, neither fulfilled nor rejected
- `fulfilled` - operation completed successfully, results are received
- `rejected` - operation failed, the fail reason is received

### `Promise` constructor

Promise constructor uses this kind of syntax:

```js
new Promise(function(resolve, reject) {
    // executor function
});
```

The function passed to the `new Promise` constructor, is called **executor**. When the `Promise` instance is created, executor function runs. This function must contain a code that will eventually create the result.

Plus, when the result is ready, executor must call one of these two functions:

- `resolve(value)` — if an operation completed successfully, promise returns `value` - an object with the result
- `reject(error)` — if an error has occurred, promise returns `error` - an `Error`(built-in JS object) object or an object inherited from `Error`

### `then`, `catch`, `finally`

`Promise` objects have embedded methods to handle returned by executor function values: 

- `then` - if the promise was settled, successfully or not

Syntax:

```js
promise.then( // promise - Promise object instance
  function(result) { /* handle success */ },
  function(error) { /* handle error */ }
)
```

- `catch` - handles only error:

```js
promise.catch(
  reason => console.error(reason);
)
```

Notice that this code is equal to:

```js
promise.then(null, reason => console.error(reason))
```

`catch` just let you write handler call shorter.

- `finally` - handler that will run in any case:

```js
promise.finally(
  () => console.log('Promise is settled!')
)
```

This method can be useful if you want to do some processing or cleanup once the promise is settled (for example, remove loading bar).

### `Promise` usage example

Let's write our API call with promises:

```js
(() => {
  let response = fetch('https://jsonplaceholder.typicode.com/todos/1') // returns 1st promise
  .then(result => result.json()) // returns 2nd promise
  .then(json => console.log(json))
})();

// > Object {userId: 1, id: 1, title: "delectus aut autem", completed: false}
```

When the `fetch` method has received a response with HTTP-headers, the **1st promise** resolves and returns a `Response` object. In order to get the body with data you need to call `response.json` method. It will either return a promise (the **2nd**) which resolves when the data is fully loaded. The **2nd promise** returns fetched data in JSON. That's why you need to use two `.then` calls.

## `Async/await`

ECMAScript 8 or ECMAScript 2017 introduced an even more comfortable way to write asynchronous code - `async/await` construction.

Due to `async/await` asynchronous coding becomes more similar to synchronous.

### `async`

`async` keyword is used before the function declaration:

```js
async () => {};
async function f() {};
```

`async` before the function guarantees that this function will return a promise

### `await`

`await` works only inside `async` functions 

`await` keyword makes JavaScript wait until the promise on the right side of `await` is not settled. When it's settled, `await` returns promise result and code execution continues.

```js
(async () => {
    let promise = Promise.resolve('Done!')
    console.log(await promise) 
})();
// > Done!
```

Let's take a look how our example changes if we are using `async/await`:

```js
(async () => {
  let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  let result = await response.json();
  console.log(result);
})();
// > Object {userId: 1, id: 1, title: "delectus aut autem", completed: false}
```

And even easier:

```js
(async () => {
  let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log(await response.json());
})();
```

You may admit that our code became much more understandable and brief.
