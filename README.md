# Lotide

A mini clone of the [Lodash](https://lodash.com) library, a [Lighthouse Labs](https://www.lighthouselabs.ca/en) project by [Devi Raju](https://github.com/DeviRaju27) 

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @devi_raju/lotide`

**Require it:**

`const _ = require('@devi_raju/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual` 

A function which will take in two arrays and return an appropriate message to the console.

* `assertEqual`

 A function that compares the two values it takes in and print out a message telling us if they match or not.

* `assertObjectsEqual`

 A function which takes in two objects and return an appropriate message to the console.

 * `countLetters`

 A function which takes in a sentence (as a string) and then return a count of each of the letters in that sentence

 * `countOnly`

 A function which takes in a collection of items and return counts for a specific subset of those items.

 * `eqArrays`

A function which takes in two arrays and returns true or false, based on a perfect match.

 * `eqObjects`

 A function which takes in two objects and returns true or false, based on a perfect match.

 * `findKey`

 A function which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

 * `findKeyByValue`

 A function which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

 * `head`

 A function which returns the first item in the array

 * `letterPositions`

 A function which will return all the indices (zero-based positions) in the string where each character is found

 * `map`

 A function which takes in two arguments: An array and a callback function. Then the function will return a new array based on the results of the callback function.

 * `middle`

 A function which will take in an array and return the middle-most element(s) of the given array.

 * `tail`

 A function which returns the "tail" of an array: everything except for the first item (head) of the provided array.

 * `takeUntil`

 A function take in two parameters : An array and a callback function. Then the function should run until the callback returns a truthy value

 * `without`

 A function which will return a subset of a given array, removing unwanted elements