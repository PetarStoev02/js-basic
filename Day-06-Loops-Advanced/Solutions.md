# Day 6 - Loops Advanced Solutions

## 01-NumbersEndingIn7.js

<details>
<summary>Solution</summary>

```js
function solve() {
    for (let i = 7; i <= 997; i++) {
        if (i % 10 === 7) {
            console.log(i);
        }
    }
}
solve(); // 7, 17, 27, 37, ... 997
```

</details>

## 02-SumOfSeries.js

<details>
<summary>Solution</summary>

```js
function solve(n) {
    let sum = 0;
    for (let i = 1; i <= Number(n); i++) {
        sum += i * i;
    }
    console.log(sum);
}
solve(5); // 1 + 4 + 9 + 16 + 25 = 55
```

</details>

## 03-SpecialSumOfNumbers.js

<details>
<summary>Solution</summary>

```js
function solve(start, end, divider) {
    let sum = 0;
    for (let i = Number(start); i <= Number(end); i++) {
        if (i % Number(divider) === 0) {
            sum += i;
        }
    }
    console.log(sum);
}
solve(10, 30, 7); // 14 + 21 + 28 = 63
```

</details>

## 04-LotteryStatistics.js

<details>
<summary>Solution</summary>

```js
function solve(n) {
    let number = Number(n);
    let oddSingle = 0, even = 0, endsIn7 = 0, divides100 = 0;

    for (let i = 1; i <= number; i++) {
        if (i % 2 === 1 && i < 10) oddSingle++;
        if (i % 2 === 0) even++;
        if (i % 2 === 1 && i % 10 === 7) endsIn7++;
        if (100 % i === 0) divides100++;
    }

    console.log(`${(oddSingle / number * 100).toFixed(2)}%`);
    console.log(`${(even / number * 100).toFixed(2)}%`);
    console.log(`${(endsIn7 / number * 100).toFixed(2)}%`);
    console.log(`${(divides100 / number * 100).toFixed(2)}%`);
}
```

</details>

## 05-CleverLily.js

<details>
<summary>Solution</summary>

```js
function solve(age, price, toyPrice) {
    age = Number(age);
    price = Number(price);
    toyPrice = Number(toyPrice);
    
    let toys = 0, money = 0, gift = 10;
    
    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            money += gift;
            gift += 10;
        } else {
            toys++;
        }
    }
    
    let total = money + (toys * toyPrice);
    if (total >= price) {
        console.log(`Yes! ${(total - price).toFixed(2)}`);
    } else {
        console.log(`No! ${(price - total).toFixed(2)}`);
    }
}
```

</details>

## 06-ExamSubmissions.js

<details>
<summary>Solution</summary>

```js
function solve(students, questions) {
    students = Number(students);
    questions = Number(questions);
    
    let submissions = students * Math.ceil(questions * 2.8);
    let bonus = students * Math.floor(questions / 3);
    let total = submissions + bonus;
    let storage = 5 * Math.ceil(total / 10);

    console.log(`${storage} KB needed`);
    console.log(`${total} submissions`);
}
```

</details>

## 07-BeehivePopulation.js

<details>
<summary>Solution</summary>

```js
function solve(population, years) {
    population = Number(population);
    years = Number(years);

    for (let i = 1; i < years; i++) {
        population += Math.floor(population * 0.2);  // +20% births
        if (i % 5 === 0) {
            population -= Math.floor(population * 0.04);  // -4% every 5 years
        }
        population -= Math.floor(population * 0.1);  // -10% deaths
    }

    console.log(`Beehive population: ${population}`);
}
```

</details>

## 08-ExamRetention.js

<details>
<summary>Solution</summary>

```js
function solve(students, seasons) {
    students = Number(students);
    
    for (let i = 1; i <= Number(seasons); i++) {
        students = Math.ceil(students * 0.9);  // -10%
        students = Math.ceil(students * 0.9);  // -10%
        students = Math.ceil(students * 0.8);  // -20%
        
        if (i % 3 === 0) {
            students += Math.ceil(students * 0.15);  // +15%
        } else {
            students += Math.ceil(students * 0.05);  // +5%
        }
    }

    console.log(`Students: ${students}`);
}
```

</details>

## 09-BeehiveDefense.js

<details>
<summary>Solution</summary>

```js
function solve(bees, bearHealth, bearDamage) {
    bees = Number(bees);
    bearHealth = Number(bearHealth);
    bearDamage = Number(bearDamage);

    while (bearHealth > 0 && bees >= 100) {
        bees -= bearDamage;
        bearHealth -= bees * 5;
    }

    if (bees < 0) bees = 0;
    
    if (bearHealth <= 0) {
        console.log(`Beehive won! Bees left ${bees}.`);
    } else {
        console.log(`The bear stole the honey! Bees left ${bees}.`);
    }
}
```

</details>

## 10-ExamPreparation.js

<details>
<summary>Solution</summary>

```js
// Complex simulation with:
// - Trainer energy management
// - Student count tracking
// - Question accumulation
// - Multiple exit conditions
```

</details>

## 11-HoneyWinterReserves.js

<details>
<summary>Solution</summary>

```js
// Process array input:
// - First element is honey needed
// - Then bee names followed by 6 days of honey gathering
// - Negative values mean bee ate honey
// - "Winter has come" ends input
```

</details>

## 12-ExamResults.js

<details>
<summary>Solution</summary>

```js
// Process student exam results:
// - Read student name
// - Read up to 6 scores
// - Calculate grade (totalPoints / 600 * 6)
// - Issue certificate if grade >= 5
// - Detect cheating (negative scores)
// - Stop at "Midnight"
```

</details>
