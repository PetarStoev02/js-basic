# Day 5 - Loops Basic Solutions

## 01-NumbersFrom1To100.js

<details>
<summary>Solution</summary>

```js
function solve() {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}
solve();
// Output: 1, 2, 3, ... 100
```

</details>

## 02-NumbersNTo1.js

<details>
<summary>Solution</summary>

```js
function solve(n) {
    n = Number(n);
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
}
solve(5); // 5, 4, 3, 2, 1
```

</details>

## 03-Numbers1ToNStep3.js

<details>
<summary>Solution</summary>

```js
function solve(n) {
    n = Number(n);
    for (let i = 1; i <= n; i += 3) {
        console.log(i);
    }
}
solve(10); // 1, 4, 7, 10
```

</details>

## 04-EvenPowersOf2.js

<details>
<summary>Solution</summary>

```js
function solve(n) {
    n = Number(n);
    for (let i = 0; i <= n; i += 2) {
        console.log(Math.pow(2, i));
    }
}
solve(4); // 1, 4, 16
```

</details>

## 05-CharacterSequence.js

<details>
<summary>Solution</summary>

```js
function solve(input) {
    for (let i = 0; i < input.length; i++) {
        console.log(input[i]);
    }
}
solve("hello"); // h, e, l, l, o
```

</details>

## 06-VowelsSum.js

<details>
<summary>Solution</summary>

```js
function solve(input) {
    let sum = 0;
    const vowelValues = { a: 1, e: 2, i: 3, o: 4, u: 5 };
    
    for (let char of input) {
        if (vowelValues[char]) {
            sum += vowelValues[char];
        }
    }
    console.log(sum);
}
solve("hello"); // 7 (e=2 + o=4 + l=0 + l=0 = 6... wait, h-e-l-l-o = 2+4 = 6)
```

</details>

## 07-SumOfNumbers.js

<details>
<summary>Solution</summary>

```js
function solve(input) {
    let sum = 0;
    for (let char of input) {
        if (!isNaN(parseInt(char))) {
            sum += parseInt(char);
        }
    }
    console.log(`The sum of the digits is: ${sum}`);
}
solve("1234"); // "The sum of the digits is: 10"
```

</details>

## 08-SumOfLetters.js

<details>
<summary>Solution</summary>

```js
function solve(product, quantity, budget) {
    let sum = 0;
    const vowels = "aeiou";
    
    for (let char of product) {
        sum += vowels.includes(char) ? 3 : 1;
    }
    sum *= Number(quantity);
    
    let moneyLeft = Number(budget) - sum;
    if (moneyLeft >= 0) {
        console.log(`${product} bought. Money left: ${moneyLeft.toFixed(2)}`);
    } else {
        console.log(`Cannot buy ${product}. Product value: ${sum.toFixed(2)}`);
    }
}
```

</details>
