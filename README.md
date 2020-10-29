- timing exercise 1 (independent then together)
- redo timing exercise 1 with async/await
- timing exercise 2
- redo timing exercise 2 with async/await


### Promises
A promise is an object that serves as a placeholder for a long-running operation, such as fetching data across the web. When the long-running operation completes, the promise receives the data, and your code can work with it.

We have already been working with promises whenever we `fetch`, because `fetch` returns a promise. We can attach a `.then` or a `.catch` handler to the promises that `fetch` returns. This is called _consuming_ the promise. Today we will look at how to make our own promises from scratch.
```
const myPromise = new Promise(function(resolve, reject) {
  // in here, you must invoke either resolve or reject!
})
```
This is somewhat of a boilerplate for promises. The function that we are passing into `new Promise` is called the _executor_. The new promise runs the executor immediately.

- Codealong: Use this template to make a promise that resolves immediately, then make another promise that rejects immediately. `console.log` the promises and note their promise state.

Promises are always in one of three states: `pending` (has not resolved yet), `fulfilled` (has resolved successfully), or `rejected` (has resolved in an error state).

### Delayed Promises
Our immediately-firing promises are not a great use of promises to be honest, because they are not allowing us to work with a time delay, which is the primary use case of promises. Let's modify them so that they simulate a delayed result:
```
const myPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    // in here, you must invoke either resolve or reject!
  }, 3 * 1000)
})
```
Modify your previous promises to have a delayed resolution like so. Log them immediately, and then log them again after they resolve.

### Conditional promises
Our promises are still oversimplified because they either always resolve or always reject. In real life, you want your promises to invoke `resolve` under some conditions and `reject` under others.

- Codealong: write a promise that uses a conditional to decide whether it should resolve or reject.

Let's make some guesses about how `fetch` works under the hood: what condition do you think it uses to decide whether it should resolve or reject?

### Consuming our promises
Before today, we were just consuming the promises that `fetch` pre-built for us. Now we know how to both build and consume them, so let's put the two halves of the puzzle together.
```
const myPromiseToConsume = new Promise(function(resolve, reject) {
  // to be filled in
})
myPromiseToConsume
.then((result) => console.log(result))
.catch((error) => console.log('There was an error: ' + error))
```
- Exercise: fill in the executor of `myPromiseToConsume` so that it contains the 2 use cases we've discussed.

When you run this promise, `undefined` should get logged. The reason for this is that whatever you pass into `resolve` and `reject` gets passed into the `.then` and `.catch` respectively, and we are not passing anything into our `resolve` and `reject`.
- Codealong: Pass some piece of data through your `resolve` and `reject` so that we can access it in our handlers.
- Question: under the hood, what do you think `fetch` passes into its `resolve` and `reject`?

