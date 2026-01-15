# Day 3 - Conditionals Basic Solutions

## 01-EvenOrOdd.js

<details>
<summary>Solution</summary>

```js
function EvenOrOdd(number) {
    let num = Number(number);
    if (num % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}
EvenOrOdd(4); // "even"
EvenOrOdd(7); // "odd"
```

</details>

## 02-Excellent.js

<details>
<summary>Solution</summary>

```js
function Excellent(grade) {
    if (grade >= 5.5) {
        console.log("Excellent!");
    }
}
Excellent(6); // "Excellent!"
```

</details>

## 03-GreaterNumber.js

<details>
<summary>Solution</summary>

```js
function GreaterNumber(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);

    if (num1 > num2) {
        console.log(num1);
    } else {
        console.log(num2);
    }
}
GreaterNumber(5, 3); // 5
```

</details>

## 04-PasswordGuess.js

<details>
<summary>Solution</summary>

```js
function PasswordGuess(pass) {
    if (pass == "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}
PasswordGuess("s3cr3t!P@ssw0rd"); // "Welcome"
```

</details>

## 05-SpeedInfo.js

<details>
<summary>Solution</summary>

```js
function speedInfo(speedAsString) {
    let speed = Number(speedAsString);

    if (speed <= 10) {
        console.log("slow");
    } else if (speed <= 50) {
        console.log("average");
    } else if (speed <= 150) {
        console.log("fast");
    } else if (speed <= 1000) {
        console.log("ultra fast");
    } else {
        console.log("extremely fast");
    }
}
speedInfo(75); // "fast"
```

</details>

## 06-NumberRange.js

<details>
<summary>Solution</summary>

```js
function numbers(num) {
    if (num < 100) {
        console.log("Less than 100");
    } else if (num <= 200) {
        console.log("Between 100 and 200");
    } else {
        console.log("Greater than 200");
    }
}
numbers(150); // "Between 100 and 200"
```

</details>

## 07-NumberToText.js

<details>
<summary>Solution</summary>

```js
function numbers(num) {
    if (num == 1) console.log("one");
    else if (num == 2) console.log("two");
    else if (num == 3) console.log("three");
    else if (num == 4) console.log("four");
    else if (num == 5) console.log("five");
    else if (num == 6) console.log("six");
    else if (num == 7) console.log("seven");
    else if (num == 8) console.log("eight");
    else if (num == 9) console.log("nine");
    else console.log("number too big");
}
numbers(5); // "five"
```

</details>

## 08-BonusScore.js

<details>
<summary>Solution</summary>

```js
function bonusScore(num) {
    let points = Number(num);
    let bonusPoints = 0;
    
    if (points <= 100) bonusPoints += 5;
    else if (points > 1000) bonusPoints += points * 0.1;
    else bonusPoints += points * 0.2;

    if (points % 2 === 0) bonusPoints += 1;
    else if (points % 10 === 5) bonusPoints += 2;

    console.log(bonusPoints);
    console.log(points + bonusPoints);
}
bonusScore(2703); // 270.3, 2973.3
```

</details>

## 09-SumSeconds.js

<details>
<summary>Solution</summary>

```js
function sumSeconds(arg1, arg2, arg3) {
    let totalTime = Number(arg1) + Number(arg2) + Number(arg3);
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}
sumSeconds(22, 7, 34); // "1:03"
```

</details>

## 10-TimePlus15Minutes.js

<details>
<summary>Solution</summary>

```js
function time(hours, minutes) {
    hours = Number(hours);
    minutes = Number(minutes) + 15;

    if (minutes >= 60) {
        minutes -= 60;
        hours += 1;
    }
    if (hours >= 24) {
        hours -= 24;
    }

    console.log(`${hours}:${minutes < 10 ? '0' + minutes : minutes}`);
}
time(23, 59); // "0:14"
```

</details>

## 11-MetricConverter.js

<details>
<summary>Solution</summary>

```js
function converter(num, input, output) {
    let number = Number(num);

    if (input === "m" && output === "mm") number *= 1000;
    else if (input === "m" && output === "cm") number *= 100;
    else if (input === "mm" && output === "m") number /= 1000;
    else if (input === "mm" && output === "cm") number /= 10;
    else if (input === "cm" && output === "m") number /= 100;
    else if (input === "cm" && output === "mm") number *= 10;
    
    console.log(number.toFixed(3));
}
converter(5000, "cm", "m"); // "50.000"
```

</details>

## 12-AreaOfFigures.js

<details>
<summary>Solution</summary>

```js
function AreaOfFigures(type, arg2, arg3) {
    let result = 0;

    if (type === "square") {
        result = Number(arg2) ** 2;
    } else if (type === "rectangle") {
        result = Number(arg2) * Number(arg3);
    } else if (type === "circle") {
        result = Math.PI * Number(arg2) ** 2;
    } else if (type === "triangle") {
        result = (Number(arg2) * Number(arg3)) / 2;
    }
    console.log(result.toFixed(3));
}
AreaOfFigures("triangle", 4.5, 20); // "45.000"
```

</details>

## 13-GodzillaVsKong.js

<details>
<summary>Solution</summary>

```js
function godzilla(budget, people, clothingCost) {
    budget = Number(budget);
    people = Number(people);
    clothingCost = Number(clothingCost);

    let decorSum = budget * 0.1;
    let clothingSum = people * clothingCost;
    
    if (people > 150) {
        clothingSum *= 0.9; // 10% discount
    }
    
    let totalCost = decorSum + clothingSum;

    if (totalCost > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalCost - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalCost).toFixed(2)} leva left.`);
    }
}
```

</details>

## 14-WorldSwimmingRecord.js

<details>
<summary>Solution</summary>

```js
function records(currentRecord, distance, speed) {
    currentRecord = Number(currentRecord);
    distance = Number(distance);
    speed = Number(speed);

    let swimTime = distance * speed;
    let delayTime = Math.floor(distance / 15) * 12.5;
    let totalTime = swimTime + delayTime;

    if (totalTime < currentRecord) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalTime - currentRecord).toFixed(2)} seconds slower.`);
    }
}
```

</details>
