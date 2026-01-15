# Day 1 - Intro Solutions

## 01-HelloWorld.js

<details>
<summary>Solution</summary>

```js
function summTwoNumbers() {
    let number1 = 6;
    let number2 = 8;
    let text = "Hello SoftUni";
    let num = 1;

    console.log(number1 + number2); // 14
    console.log(number1 + "6");     // "66" (string concatenation)
    console.log(text);              // "Hello SoftUni"
    
    // Incrementing num from 1 to 10
    for (let i = 0; i < 9; i++) {
        console.log(num);
        num = num + 1;
    }
    console.log(num);
}
summTwoNumbers();
```

</details>

## 02-Expressions.js

<details>
<summary>Solution</summary>

```js
function expression() {
    let result = (3522 + 52353) * 23 - (2336 * 501 + 23432 - 6743) * 3;
    console.log(result); // -2207182
}
expression();
```

</details>

## 03-RectangleArea.js

<details>
<summary>Solution</summary>

```js
function rectangleArea() {
    let a = 2;
    let b = 7;
    let area = a * b;
    console.log(area); // 14
}
rectangleArea();
```

</details>
