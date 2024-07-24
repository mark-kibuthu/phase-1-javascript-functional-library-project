# JavaScript Functional Library Project

## Learning Goals

- Gain a greater understanding of JavaScript's built-in collection-processing
  methods
- Gain a greater understanding of callback functions

## Introduction

In this lab, you will gain a deeper understanding of JavaScript's built in
collection-processing methods (`map`, `filter` etc.) by building your own
implementation of them. You will also have the opportunity to practice using
callbacks, including calling a callback from within a function, passing a
callback to a function, and passing data between functions and callbacks.

The programming approach you will be using in this lab is an example of
***functional programming (FP)***. There is nothing new or different here —
we've been guiding you all along to think in the "FP" mindset — but you should
use this as an opportunity to start understanding some important distinctions
between functional programming and other styles of programming.

A complete understanding of functional programming requires an understanding of
a number of advanced topics in JavaScript, including **pure functions**, **side
effects**, and **immutability**. However, at its most basic, FP can be
understood as a programming style in which data manipulation occurs through
functions that return the result of the manipulation without modifying the state
of the original data. This style of programming can be contrasted with
programming approaches that use **shared state**, in which data is manipulated
and the results stored in a central location (commonly known as **state**). You
will learn more about shared state when you get to React in the next phase.

Read through [this blog post about functional programming][FP] before continuing
with the lab, but don't worry too much if you don't understand everything you
read. Your goal should be to begin to get a feel for the concepts and for the
distinction between functional programming and other styles of programming.

## Instructions

Listed below are function signatures for each of the functions you will need to
build. Each signature details what the name, parameters, and return value of the
function should be. Pay close attention to these requirements as you work your
way through. There are also some sample function calls provided with their
expected return values; be sure to use them to test your functions.

The functions are divided into three categories: array functions, object
functions, and functions that should work with **either** collection type. Your
job is to develop the code to implement these functions.

The point of this exercise is to build ***your own implementation*** of the
collection-processing methods. Don't simply re-use the built-in methods!
Leverage all you know about callbacks, passing data, etc. to prove that you
could build your own collection-processing framework whenever ***you*** want.

**Hint:** For the first set of functions, you will need to figure out how to
make them work with either arrays or objects. There are multiple ways you could
approach this. One option is to use an `if` statement to determine whether the
collection is an object or an array and then process the collection accordingly.
However, this approach would require writing two different versions of your code
for each function, which doesn't sound very efficient. Another (better) option
is to determine whether the collection is an object or an array and, if it's an
object, use a JavaScript `Object` method to create an array that contains the
object's values. You then only need to write code that processes an array,
regardless of what data structure is passed in to your function. Use your
Googling skills to figure out how to do this.

## Collection Functions (Arrays or Objects)

### myEach

`myEach(collection, callback)`

Parameter(s):

- a collection (either an object or an array)
- a callback function

Return value:

- The original collection

Behavior:

Iterates over the collection of elements, passing each element in turn to the
callback function. Returns the original, unmodified, collection.

Example function calls:

```javascript
myEach([1, 2, 3], alert);
=> alerts each number in turn and returns the original collection

myEach({one: 1, two: 2, three: 3}, alert);
=> alerts each number value in turn and returns the original collection
```

### myMap

`myMap(collection, callback)`

Parameter(s):

- a collection (either an object or an array)
- a callback function

Return value:

- A new array

Behavior:

Produces a new array of values by mapping each value in `collection` through a
transformation function, `callback`. Returns the new array without modifying the
original.

Example function calls:


## Conclusion

Building a functional library is a great experience for learning to see how
many functions can build off of each other. This lab asked you to take on some
of the basic tasks that you would face when writing a functional library.

Expand your vocabulary by visiting a library like [lodash][] or [ramda][]. Look
at methods like Ramda's [filter][] or [flip][]. Can you imagine how to write
that? These libraries are providing the functionality just like you did!

You've pushed your skills to a whole new level. Congratulations!

## Resources

- [lodash][]
- [ramda][]

[lodash]: https://lodash.com
[ramda]: https://ramdajs.com/docs/
[filter]: https://ramdajs.com/docs/#filter
[flip]: https://ramdajs.com/docs/#flip
[FP]: https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0
