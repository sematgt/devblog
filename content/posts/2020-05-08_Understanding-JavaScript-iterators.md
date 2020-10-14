---
path: "/Understanding-JavaScript-iterators"
date: 2020-05-08
title: "Understanding JavaScript iterators"
subtitle: "Explained"
tags: "JavaScript"
readtime: 10
template: blogpost
tableOfContents: true
postImage: {
   alt: "Featured photo",
   url: "../images/posts/4/sebastian-herrmann-Vk8NI43e3HM-unsplash (1).png",
   creds: {
      author: {
        name: "Sebastian Herrmann",
        url: "https://unsplash.com/@herrherrmann?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
      },
      source: {
         name: "Unsplash",
         url: "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
      }
   } 
}
postType: "Article"
---

## Intro

If you've ever used JavaScript loops, you know that the [`for/of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop can walk through objects of different types - strings, arrays, maps, sets, etc. These kinds of loops are working with the special type of object's interfaces, called *iterators*. The object that has this kind of interface called *iterable*.

Let's implement our own iterable class. 🎬

## Initialize class

JavaScript according to the [ECMAScript specification](https://en.wikipedia.org/wiki/ECMAScript) affords standard object types. One of them called `Set`. It is JS implementation of a *set* math concept. This structure can be described as a group of non-repeating elements of a certain type. In other words, if you'll try to add a `1` value to the `1, 2, 3` set, your action will cause no effect as this set has already had this value.

Ok, let's implement the *Group* class that repeats the standard `Set` classes behavior:

```js
class Group {
  constructor() {
    this.elements = [];
  }

  add(element) {
    if (!this.has(element)) {
      this.elements.push(element);
    }
  }

  delete(element) {
    this.elements.filter(e => e !== element);
  }

  has(element) {
    return this.elements.includes(element);
  }
}
```

This class stores his elements in an array, class constructor initialize him with no elements. Methods `add`, `delete`, and `has` are using for adding, deleting and checking if the method's argument belongs to the group. 

Now we need to initialize our class and add elements to it:

```js
let group = new Group()
for (let e of [🍕, 🍔, 🥙, 🌭, 🌮]) group.add(e)
console.log(group)
// Group {elements: Array[5], constructor: Object}
// elements: Array[5]
// 0: 🍕
// 1: 🍔
// 2: 🥙
// 3: 🌭
// 4: 🌮
// <constructor>: "Group"
```

> If you have errors on this step try to change emojis to numbers: 
>
> ```js
> for (let e of [1, 2, 3, 4, 5]) group.add(e)
> ```

## Initializing iterator class

Now let's write an iterator for our `Group` class.

Iterators in JS are classes that have the `next()` method which returns a next value of an iterable object. This value must be an object with `value` and `done` properties, for example:

```js
Object {value: 2, done: false}
```

The `value` property contains the next element of an iterable object, the `done` property is `true` only when there are no elements left in the group and `false` in any other cases.

```js
class GroupIterator {
  constructor(group) {
    this.group = group;
    this.currentIndex = 0;
  }

  next() {
    // 1 stage
    if (this.currentIndex === this.group.elements.length) {
      return { done: true };
    }
	// 2 stage
    let currentValue = {
      value: this.group.elements[this.currentIndex],
      done: false
    };
    // 3 stage
    this.currentIndex++;
    // 4 stage
    return currentValue;
  }
}
```

As you can see the `next()` method starts to iterate with the zero-index element and works on the algorithm below:

- **1 stage** Check, if current index is last, then end of the iteration
- **2 stage** Refresh the returning value by the current index number
- **3 stage** Calculate an index for the next method call (adjust by 1)
- **4 stage** Return the value

By this *CRCR* algorithm, you can write an iterator to an any object or a class.

## Attaching iterator to a class

Add to our *Group* class a special method called `[Symbol.iterator]`. 

> As you can see, it is enclosed in square brackets. This kind of definition is used because this method is using [symbol](https://medium.com/beginners-guide-to-mobile-web-development/javascript-introduction-to-symbols-3b0db80b4c51) as its name (if you aren't familiar with the symbol concept right now, don't worry - it's not necessary to know it to be able to understand iterators - feel free to research this topic later).

```js{20-22}
class Group {
  constructor() {
    this.elements = [];
  }

  add(element) {
    if (!this.has(element)) {
      this.elements.push(element);
    }
  }

  delete(element) {
    this.elements.filter(e => e !== element);
  }

  has(element) {
    return this.elements.includes(element);
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}
```

That's it! Our iterator is ready to roll! 🏎️

```js
for (let value of group) console.log(value);
// 🍕
// 🍔
// 🥙
// 🌭
// 🌮
```

You can find finish code in my [github gists](https://gist.github.com/sematgt/8bea92d9ac29384555990c569005670b).
