# React Testing Examples

This repository contains some examples about using the [React Testing Library](https://testing-library.com/)
to test React components and hooks.

## The Example App

This small application shows Bitcoin prices fetched from the Coindeks API.
You can run the app using the following commands

```console
$ npm i
$ npm start
```

## The Tests

You'll find the test files in:

```
└── src
    ├── App.int.test.js
    ├── components
    │   └── PriceDisplay.unit.test.js
    └── hooks
        └── useBtcPrice.unit.test.js
```

The `.int.test.js` files are integration tests, the `.unit.test.js` files contain
integration tests.

You can use the following command to run all or some tests:

```console
$ npm test
$ npm run test:unit
$ npm run test:int
```

You can also use the following commands to view the code coverage:

```console
$ npm run test:coverage
$ npm run test:coverage:unit
$ npm run test:coverage:int
```
