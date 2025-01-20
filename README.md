# React Native: Handling Null or Undefined Object Properties

This repository demonstrates a common error in React Native applications: attempting to access a property of an object that is null or undefined. This often occurs when working with asynchronous data fetching.

## The Problem

The provided `bug.js` file shows an example where a component attempts to access the `name` property of a `data` object before the data has been fetched and updated in the component's state.  This leads to a `TypeError: Cannot read properties of undefined (reading 'name')` error.

## The Solution

The `bugSolution.js` file demonstrates how to correctly handle this situation by using optional chaining (`?.`) and nullish coalescing (`??`) operators.  These operators provide a concise way to check for null or undefined values before accessing properties, preventing the error.  The solution also includes error handling using a try-catch block for more robust error management.

## How to Run

1. Clone this repository.
2. Navigate to the project directory in your terminal.
3. Run `npx react-native run-android` or `npx react-native run-ios` to run the app on your device or emulator.  Make sure you have a React Native development environment set up.