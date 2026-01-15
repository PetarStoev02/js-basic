# Day 4 - Conditionals Advanced Solutions

## 01-DayOfWeek.js

<details>
<summary>Solution</summary>

```js
function dayOfWeek(num) {
    switch (Number(num)) {
        case 1: console.log("Monday"); break;
        case 2: console.log("Tuesday"); break;
        case 3: console.log("Wednesday"); break;
        case 4: console.log("Thursday"); break;
        case 5: console.log("Friday"); break;
        case 6: console.log("Saturday"); break;
        case 7: console.log("Sunday"); break;
        default: console.log("Error"); break;
    }
}
dayOfWeek(3); // "Wednesday"
```

</details>

## 02-WeekendOrWorkingDay.js

<details>
<summary>Solution</summary>

```js
function WeekendOrWorking(day) {
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            console.log("Working day");
            break;
        case "Saturday":
        case "Sunday":
            console.log("Weekend");
            break;
        default:
            console.log("Error");
    }
}
WeekendOrWorking("Saturday"); // "Weekend"
```

</details>

## 03-AnimalType.js

<details>
<summary>Solution</summary>

```js
function animalType(animal) {
    switch (animal) {
        case "dog":
            console.log("mammal");
            break;
        case "crocodile":
        case "tortoise":
        case "snake":
            console.log("reptile");
            break;
        default:
            console.log("unknown");
    }
}
animalType("snake"); // "reptile"
```

</details>

## 04-FruitOrVegetable.js

<details>
<summary>Solution</summary>

```js
function shop(item) {
    const fruits = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes"];
    const vegetables = ["tomato", "cucumber", "pepper", "carrot"];
    
    if (fruits.includes(item)) {
        console.log("fruit");
    } else if (vegetables.includes(item)) {
        console.log("vegetable");
    } else {
        console.log("unknown");
    }
}
shop("apple"); // "fruit"
```

</details>

## 05-NumberInRange.js

<details>
<summary>Solution</summary>

```js
function NumberR(num) {
    num = Number(num);
    if (num >= -100 && num <= 100 && num != 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}
NumberR(50); // "Yes"
```

</details>

## 06-InvalidNumber.js

<details>
<summary>Solution</summary>

```js
function solve(num) {
    num = Number(num);
    if (!(num >= 100 && num <= 200 || num == 0)) {
        console.log("invalid");
    }
}
solve(50); // "invalid"
```

</details>

## 07-PersonalTitles.js

<details>
<summary>Solution</summary>

```js
function title(age, sex) {
    age = Number(age);
    if (sex == "f") {
        console.log(age >= 16 ? "Ms." : "Miss");
    } else if (sex == "m") {
        console.log(age >= 16 ? "Mr." : "Master");
    }
}
title(25, "m"); // "Mr."
```

</details>

## 08-SmallShop.js

<details>
<summary>Solution</summary>

```js
// Prices vary by city - see full solution in the exercise file
// Sofia, Plovdiv, and Varna have different prices for:
// coffee, water, beer, sweets, peanuts
```

</details>

## 09-TradeCommissions.js

<details>
<summary>Solution</summary>

```js
// Commission rates vary by city and sales amount
// Sofia: 5%, 7%, 8%, 12% for different tiers
// Varna: 4.5%, 7.5%, 10%, 13%
// Plovdiv: 5.5%, 8%, 12%, 14.5%
```

</details>

## 10-FruitShop.js

<details>
<summary>Solution</summary>

```js
// Weekday prices differ from weekend prices
// Use switch for day, nested if-else for fruit type
```

</details>

## 11-SkiTrip.js

<details>
<summary>Solution</summary>

```js
// Room types: "room for one person", "apartment", "president apartment"
// Discounts based on stay length and review type (positive/negative)
```

</details>

## 12-Honeycombs.js

<details>
<summary>Solution</summary>

```js
function solve(bees, flowers) {
    let honey = Number(bees) * Number(flowers) * 0.21;
    let honeycombs = Math.floor(honey / 100);
    let leftover = honey % 100;

    console.log(`${honeycombs} honeycombs filled.`);
    console.log(`${leftover.toFixed(2)} grams of honey left.`);
}
solve(11, 120); // 2 honeycombs, 77.20 grams left
```

</details>

## 13-BeehiveRole.js

<details>
<summary>Solution</summary>

```js
function solve(intellect, strength, sex) {
    if (intellect >= 80 && strength >= 80 && sex === "female") {
        console.log("Queen Bee");
    } else if (intellect >= 80) {
        console.log("Repairing Bee");
    } else if (intellect >= 60) {
        console.log("Cleaning Bee");
    } else if (strength >= 80 && sex === "male") {
        console.log("Drone Bee");
    } else if (strength >= 60) {
        console.log("Guard Bee");
    } else {
        console.log("Worker Bee");
    }
}
```

</details>

## 14-HoneyHarvest.js

<details>
<summary>Solution</summary>

```js
// Different flowers produce different honey amounts per season
// Spring: Sunflower 10, Daisy 12+10%, Lavender 12, Mint 10+10%
// Summer: All 8 (Mint 12), +10% bonus
// Autumn: Sunflower 12, others 6, -5% penalty
```

</details>

## 15-ExamPoints.js

<details>
<summary>Solution</summary>

```js
// Points multiplied by different factors based on:
// - Problem number (1-4)
// - Course level (Basics, Fundamentals, Advanced)
// Advanced gets +20% bonus
```

</details>

## 16-ExamCategories.js

<details>
<summary>Solution</summary>

```js
function solve(difficulty, rotation, pages) {
    if (difficulty >= 80 && rotation >= 80 && pages >= 8) {
        console.log("Legacy");
    } else if (difficulty >= 80 && rotation < 10) {
        console.log("Master");
    } else if (rotation > 50 && pages >= 2) {
        console.log("Hard");
    } else if (difficulty < 30 && pages < 1) {
        console.log("Easy");
    } else if (difficulty <= 10) {
        console.log("Elementary");
    } else {
        console.log("Regular");
    }
}
```

</details>
