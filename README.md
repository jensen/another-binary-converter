## Purpose

This project was completed as part of a group learning exercise.

## Demo

[https://quirky-pike-206312.netlify.app/](https://quirky-pike-206312.netlify.app/)

## Project Features

1.  ~~User can enter up to 8 binary digits in one input field~~
2.  ~~User must be notified if anything other than a 0 or 1 was entered~~
3.  User can toggle switches to input an 8 digit binary number
4.  User views the results in a single output field containing the decimal (base 10) equivalent of the binary number that was ~~entered~~ selected

I wanted to do something with a more specific user experience. The switches only allow for `0` or `1` which means no notification is necessary.

![Another Binary Converter Demo Animation](https://user-images.githubusercontent.com/14803/140261994-1df9ccfd-d846-462c-8189-6e7efc84e573.gif)

## Technical Specifications

### Constraints

1. Arrays may not be used to contain the binary digits entered by the user
2. Determining the decimal equivalent of a particular binary digit in the sequence must be calculated using a single mathematical function, for example the natural logarithm. It's up to you to figure out which function to use.

I have provided two implementations that allow us to calculate a decimal number from a binary number. Neither of them require me to store binary digits in an array.

The first implementation is a simple recursive sum of the decimal value for each binary digit. Details of this can be found at [src/utils/calculator.ts](src/utils/calculator.ts). I decided I didn't need this for the application, but I wrote a test to verify that the function works as expected.

The second implementation takes advantage of Reacts component model. Each binary switch knows the position that it holds. When it is toggled, the decimal value of that position is either added or removed from the decimal counter. This code is contained within the [src/components/Converter.tsx](src/components/converter.tsx) file.

### Testing

Since the project was limited in scope, I decided to include some examples of tests for different parts of the application.

- [Component integration tests](src/components/__tests__/Converter.test.tsx)
- [Component unit tests](src/components/__tests__/Panel.test.tsx)
- [Custom Hook unit tests](src/hooks/__tests__/useToggle.test.ts)
- [Utility function unit tests](src/utils/__tests__/calculator.test.ts)

The cumulative result of these tests is 100% coverage.

```
-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-------------------|---------|----------|---------|---------|-------------------
All files          |     100 |      100 |     100 |     100 |
 components        |     100 |      100 |     100 |     100 |
  BinarySwitch.tsx |     100 |      100 |     100 |     100 |
  Converter.tsx    |     100 |      100 |     100 |     100 |
  Decimal.tsx      |     100 |      100 |     100 |     100 |
  Panel.tsx        |     100 |      100 |     100 |     100 |
  Title.tsx        |     100 |      100 |     100 |     100 |
 hooks             |     100 |      100 |     100 |     100 |
  useToggle.ts     |     100 |      100 |     100 |     100 |
 utils             |     100 |      100 |     100 |     100 |
  calculator.ts    |     100 |      100 |     100 |     100 |
-------------------|---------|----------|---------|---------|-------------------

Test Suites: 4 passed, 4 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        3.259 s
```

### Setup

**Install Dependencies**

`npm install`

**Run Application**

`npm start`

**Run Tests**

`npm test`
