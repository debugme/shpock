# Introduction

This application shows an example of how to implement the setTimeout function. The approach taken is to base it on the setInterval function. This strategy was adopted as the most appropriate given the suggested 30 mins timeframe. Alternative approaches I considered and discounted were:

• Write an implementation based on [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)

• Write an implementation in [Rust/Web Assembly](https://rustwasm.github.io/docs/book/reference/js-ffi.html)

# Approach taken to build

(1) Understand the behaviour of [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) in detail by reading up on it

(2) Write a set of unit tests to test the API exposed by setTimeout and ensure these tests were all passing

(3) Write an alternative version of setTimeout, update the tests to use my version instead and ensure the tests continue to pass

This workflow provided confidence that the alternative version looked and behaved the same while also providing 100% test code coverage.

# How to test

```sh
# Clone the repository
$ git clone git@github.com:debugme/shpock.git
$ cd shpock

# Install the dependencies
$ npm install

# Run the tests
$ npm test

```

# Next steps

☕️ Have a coffee and a donut 🍩
