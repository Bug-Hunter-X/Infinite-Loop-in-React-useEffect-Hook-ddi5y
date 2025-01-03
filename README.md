# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by incorrectly managing dependencies.

The `bug.js` file contains the faulty code. The `count` state is updated inside the `useEffect` hook, and `count` is also in the dependency array. This leads to an infinite re-render cycle.

The `bugSolution.js` file shows the correct implementation. The dependency array is adjusted to prevent the infinite loop.  Only use values that are external to the component in the dependency array.