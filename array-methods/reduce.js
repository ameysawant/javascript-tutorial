const learnArraysComplete = () => {
  // "========== SIMPLE ARRAYS (Primitive Data) =========="
  // Different types of simple arrays
  let numbers = [5, 2, 8, 1, 9, 3, 7, 4, 6];
  let strings = ["apple", "banana", "cherry", "date", "elderberry"];

  // Array of objects - Users
  let users = [
    { id: 1, name: "John", age: 25, city: "NYC", active: true, salary: 50000 },
    { id: 2, name: "Jane", age: 30, city: "LA", active: false, salary: 60000 },
    {
      id: 3,
      name: "Bob",
      age: 35,
      city: "Chicago",
      active: true,
      salary: 55000,
    },
    { id: 4, name: "Alice", age: 28, city: "NYC", active: true, salary: 52000 },
    {
      id: 5,
      name: "Charlie",
      age: 32,
      city: "LA",
      active: false,
      salary: 58000,
    },
    {
      id: 6,
      name: "Jane",
      age: 32,
      city: "LA",
      active: false,
      salary: 58000,
    },
  ];

  let sum = numbers.reduce((total, num) => {
    // console.log(total, num);
    return total + num;
  }, 1);

  // console.log(sum); // 45

  let max = numbers.reduce((accu, num) => {
    console.log(`Current accumulator: ${accu}, Current number: ${num}`);

    if (num > accu) {
      console.log(
        `  ✅ ${num} is greater than ${accu}, so new accumulator = ${num}`,
      );
      return num; // This becomes the new 'accumulator' for next iteration
    } else {
      console.log(`  ❌ ${num} is NOT greater than ${accu}, so keep ${accu}`);
      return accu; // Keep the existing 'accumulator' for next iteration
    }
  }, numbers[0]); // Start with first number (5)

  console.log("Final max:", max);

  // console.log(max); // 9
};

window.addEventListener("DOMContentLoaded", () => {
  learnArraysComplete();
});
