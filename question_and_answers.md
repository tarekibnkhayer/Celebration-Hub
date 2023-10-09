<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer: A</b></summary>
<p>

#### Answer: A

<i>When we don't use any variable keyword(var, const, let) to declare a variable, the variable become a global variable. So it can be accessible from anywhere in the file.NO. 1 question variable greetign is now a global variable so we can access it from anywhere in the same file.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer: C</b></summary>
<p>

#### Answer: C

<i>JS read code from left to right . When it see a string "2" on it's way it will consider number 1 also as a string . And show the result through concatenate. So it will give "12"</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer: A</b></summary>
<p>

#### Answer: A

<i>info.favoriteFood doesn't affect the original array "food" . They are separate variables.So, the output will be the same as food array.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer: B</b></summary>
<p>

#### Answer: B

<i>sayHi function demand an arguments from function calling .But in the question there was not an argument so it will take name parameter as undefined and show result `Hi there, undefined`</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer :C</b></summary>
<p>

#### Answer: C

<i>
First we declare that count value is 0;
nums.forEach loop through every element of the array . For the first element(0) it will be a falsy value so it does not increment the count value for the condition of if statement . But other 3 values are true so it will increase the value of count variable by 3. So , the answer will be 3.
</i>

</p>
</details>
