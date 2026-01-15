# Day 2 - Data Types Solutions

## 01-GreetingByName.js

<details>
<summary>Solution</summary>

```js
function greetingByName(arg) {
    let name = arg;
    console.log("Hello, " + name + "!");
}
greetingByName("Todor"); // "Hello, Todor!"
```

</details>

## 02-ConcatenateData.js

<details>
<summary>Solution</summary>

```js
function concatenateData(fName, lName, sAge, incomeTown) {
    let firstName = fName;
    let lastName = lName;
    let age = Number(sAge);
    let town = incomeTown;

    console.log(
        `You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`
    );
}
concatenateData("Todor", "Stoqnov", "35", "Pazardzhik");
// Output: "You are Todor Stoqnov, a 35-years old person from Pazardzhik."
```

</details>

## 03-SquareArea.js

<details>
<summary>Solution</summary>

```js
function squareArea(a) {
    let area = a * a;
    console.log(area);
}
squareArea(5); // 25
```

</details>

## 04-InchesToCm.js

<details>
<summary>Solution</summary>

```js
function inchesToCm(cm) {
    let inch = Number(cm * 2.54);
    console.log(inch);
}
inchesToCm(5); // 12.7
```

</details>

## 05-FishTank.js

<details>
<summary>Solution</summary>

```js
function FishTank(length, width, hight, percent) {
    let volume = Number(length * width * hight);
    let volumeInLiters = Number(volume * 0.001);
    let percents = Number(percent * 0.01);

    console.log(Number(volumeInLiters * (1 - percents)).toFixed(3));
}
FishTank(105, 77, 89, 18.5); // 586.449
```

</details>

## 06-PetShop.js

<details>
<summary>Solution</summary>

```js
function PetShop(dogs, otherDogs) {
    let dogsPrize = Number(dogs * 2.5);
    let otherDogsPrize = Number(otherDogs * 4);
    console.log(Number(dogsPrize + otherDogsPrize).toFixed(2) + " lv.");
}
PetShop(13, 9); // "68.50 lv."
```

</details>

## 07-ProjectsCreation.js

<details>
<summary>Solution</summary>

```js
function ProjectsCreation(name, num) {
    let projectTime = Number(num * 3);
    console.log(
        `The architect ${name} will need ${projectTime} hours to complete ${num} project/s.`
    );
}
ProjectsCreation("Sanya", 9);
// Output: "The architect Sanya will need 27 hours to complete 9 project/s."
```

</details>

## 08-YardGreening.js

<details>
<summary>Solution</summary>

```js
function YardGreening(squereM) {
    let Prize = Number(squereM * 7.61).toFixed(2);
    let discountPrice = Number(Prize * 0.18).toFixed(2);
    let finalPrice = Number(Prize - discountPrice).toFixed(2);
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discountPrice} lv.`);
}
YardGreening(540);
// Final price: 3371.69 lv., Discount: 739.91 lv.
```

</details>

## 09-Division.js

<details>
<summary>Solution</summary>

```js
function solve() {
    let result = parseInt(25 / 4);
    console.log(25 / 4);  // 6.25 (decimal division)
    console.log(result);   // 6 (integer division)
}
solve();
```

</details>

## 10-RectangleArea2D.js

<details>
<summary>Solution</summary>

```js
function rectangleArea(x1, y1, x2, y2) {
    let length = Number(Math.abs(x1 - x2));
    let width = Number(Math.abs(y1 - y2));
    let area = length * width;
    let perimeter = 2 * (length + width);
    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}
rectangleArea(30, 40, 70, -10); // Area: 2000.00, Perimeter: 180.00
```

</details>

## 11-RadiansToDegrees.js

<details>
<summary>Solution</summary>

```js
function RadiansToDegrees(radians) {
    let degrees = Number((radians * 180) / Math.PI);
    console.log(degrees.toFixed(0));
}
RadiansToDegrees(6.2832); // 360
```

</details>

## 12-TailoringWorkshop.js

<details>
<summary>Solution</summary>

```js
function workshop(tables, length, width) {
    tables = Number(tables);
    length = Number(length);
    width = Number(width);

    let rab = 0.3;
    let usd = 1.85;

    let tablespace = tables * (length + 2 * rab) * (width + 2 * rab);
    let blanketspace = tables * (length / 2) * (length / 2);

    let priceusd = tablespace * 7 + blanketspace * 9;
    let priceleva = priceusd * usd;

    console.log(`${priceusd.toFixed(2)} USD`);
    console.log(`${priceleva.toFixed(2)} BGN`);
}
workshop(10, 1.2, 0.65); // 190.75 USD, 352.89 BGN
```

</details>

## 13-USDtoBGN.js

<details>
<summary>Solution</summary>

```js
function money(lv) {
    let usd = Number(lv * 1.79549).toFixed(2);
    console.log(usd);
}
money(12.5); // 22.44
```

</details>
