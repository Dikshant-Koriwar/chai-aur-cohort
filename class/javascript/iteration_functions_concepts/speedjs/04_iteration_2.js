let salesData = [
  { product: "Laptop", price: 1200 },
  { product: "Smartphone", price: 800 },
  { product: "Headphones", price: 150 },
  { product: "Keyboard", price: 80 },
];

let totalSales = salesData.reduce((acc, sale) => acc + sale.price, 0);
// console.log(totalSales);

// Items less than 50
let inventory = [
  { name: "Widget A", stock: 30 },
  { name: "Widget B", stock: 120 },
  { name: "Widget C", stock: 45 },
  { name: "Widget D", stock: 70 },
];

let lowStockItems = inventory.filter((item) => {
  return item.stock < 50;
});
// console.log(lowStockItems);

let userActivity = [
  { user: "Alice", activityCount: 45 },
  { user: "Bob", activityCount: 12 },
  { user: "Charlie", activityCount: 33 },
];
// find most active user

let mostActiveUser = userActivity.reduce((maxUser, user) =>
  user.activityCount > maxUser.activityCount ? user : maxUser
);
// console.log(mostActiveUser);

let expenses = [
  { description: "Groceries", amount: 50, category: "Food" },
  { description: "Electricity Bill", amount: 100, category: "Utilities" },
  { description: "Dinner", amount: 30, category: "Food" },
  { description: "Internet Bill", amount: 50, category: "Utilities" },
];

//1
let expenseReport = expenses.reduce(
  (report, expense) => {
    report[expense.category] += expense.amount;
    // report[expense.category] = (report[expense.category] || 0) + expense.amount;

    return report;
  },
  { Food: 0, Utilities: 0 }
);

console.log("Expense Report", expenseReport);


//2
let tasks = [
  { description: "Write report", completed: false, priority: 2 },
  { description: "Send email", completed: true, priority: 3 },
  { description: "Prepare presentation", completed: false, priority: 1 },
];

let pendingSortedTasks = tasks
  .filter((task) => !task.completed)
  .sort((a, b) => a.priority - b.priority);

console.log(pendingSortedTasks);

let movieRatings = [
  { title: "Movie A", ratings: [4, 5, 3] },
  { title: "Movie B", ratings: [5, 5, 4] },
  { title: "Movie C", ratings: [3, 4, 2] },
];


//3
let averageRatings = movieRatings.map((movie) => {
  let total = movie.ratings.reduce((sum, rating) => sum + rating, 0);
  let average = total / movie.ratings.length;
  //   movie.ratings = average;
  //   return movie;
  return { title: movie.title, ratings: average.toFixed(2) };
});
console.log(averageRatings);
console.log(movieRatings);

[{ title: "Movie A", ratings: 3.3 }, {}];


/* 
In this version of the code, you're directly modifying the `ratings` property of the original `movieRatings` array. Here's what's happening:

1. The `map` function iterates through each movie object.
2. The `reduce` function calculates the total sum of the ratings for each movie.
3. The average is computed by dividing the total by the number of ratings.
4. The line `movie.ratings = average;` directly modifies the `ratings` property of each movie object, replacing the array of ratings with the average.
5. Since the `map` function returns a reference to the original objects (which were modified), both `averageRatings` and `movieRatings` will reflect the change.

### Output:

```javascript
[
  { title: "Movie A", ratings: 4 },
  { title: "Movie B", ratings: 4.666666666666667 },
  { title: "Movie C", ratings: 3 }
]
```

Since both `averageRatings` and `movieRatings` are referencing the same objects, they will both display the same modified data.

### Why is this happening?
- JavaScript objects are reference types. When you modify an object inside `map()`, it affects the original object in the array because both `averageRatings` and `movieRatings` are pointing to the same reference in memory. 

### How to avoid this (if needed)?
If you want to keep the original `movieRatings` array unchanged, you can return a new object instead:

```javascript
let averageRatings = movieRatings.map((movie) => {
  let total = movie.ratings.reduce((sum, rating) => sum + rating, 0);
  let average = total / movie.ratings.length;
  return { ...movie, ratings: average }; // Creates a new object
});
```
*/

/*
The code you provided calculates the average rating for each movie and returns a new array with the title and average rating. Here's a breakdown of what happens:

1. The `map` function iterates over each movie in the `movieRatings` array.
2. For each movie, the `reduce` function calculates the total sum of the ratings.
3. The average rating is calculated by dividing the total by the number of ratings.
4. A new object is returned with the movie title and the average rating (rounded to two decimal places using `toFixed(2)`).
5. The original `movieRatings` array remains unchanged because you are creating a new object instead of modifying the original.

### Output:
```javascript
[
  { title: "Movie A", ratings: "4.00" },
  { title: "Movie B", ratings: "4.67" },
  { title: "Movie C", ratings: "3.00" }
]
```

The original `movieRatings` array stays the same:
```javascript
[
  { title: "Movie A", ratings: [4, 5, 3] },
  { title: "Movie B", ratings: [5, 5, 4] },
  { title: "Movie C", ratings: [3, 4, 2] }
]
```

### Why?
- Since you are creating a new object with `{ title: movie.title, ratings: average.toFixed(2) }` and not modifying the original array, the original data remains intact. 
- The commented-out lines (`movie.ratings = average`) would modify the original array if uncommented.

*/
