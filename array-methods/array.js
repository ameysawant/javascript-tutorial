const learnArraysComplete = () => {
  // "========== SIMPLE ARRAYS (Primitive Data) =========="
  // Different types of simple arrays
  let numbers = [5, 2, 8, 1, 9, 3, 7, 4, 6];
  let strings = ["apple", "banana", "cherry", "date", "elderberry"];
  let mixed = [1, "hello", true, null, undefined, 3.14];
  let duplicates = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

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

  // Array of objects - Products
  let products = [
    {
      id: 101,
      name: "Laptop",
      price: 999,
      category: "Electronics",
      rating: 4.5,
    },
    { id: 102, name: "Mouse", price: 25, category: "Electronics", rating: 4.0 },
    { id: 103, name: "Desk", price: 350, category: "Furniture", rating: 4.2 },
    { id: 104, name: "Chair", price: 150, category: "Furniture", rating: 3.8 },
    {
      id: 105,
      name: "Monitor",
      price: 300,
      category: "Electronics",
      rating: 4.7,
    },
  ];

  // Nested array (array within array)
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  // HOW TO CREATE ARRAYS IN DIFFERENT WAYS
  // let arr1 = [1, 2, 3]; // Array literal
  // let arr2 = new Array(1, 2, 3); // Array constructor
  // let arr3 = new Array(3); // Empty array of length 5
  // let arr4 = Array.from("hello"); // ['h', 'e', 'l', 'l', 'o']
  // let arr5 = Array.of(1, 2, 3); // [1, 2, 3]
  // let arr6 = [...[1, 2, 3]]; // Spread operator

  // let arrnew = [...arr1, 4];
  // let arrnew = [];
  // let x = arrnew.concat(arr1.concat(4));
  // console.log(x);

  //HOW TO ACCESS
  // Simple array access
  // console.log("First number:", users[2]);
  // console.log("Last number:", numbers[numbers.length - 1]);
  // console.log("Third string:", strings[2]);
  // console.log("Using at() method:", users.at(-1)); // Last element

  // Complex array access
  // console.log("First user name:", users[0].name);
  // console.log("Second product price:", products[1].price);
  // console.log("Matrix element [1][1]:", matrix[1][1]); // 5

  // console.log("Length of numbers:", numbers.length);
  // console.log("Length of users:", users.length);
  // console.log("Is numbers an array?", Array.isArray(numbers));
  // console.log("Is {} an array?", Array.isArray({}));

  //HOW TO ADD VALUES IN AN ARRAY
  // let tempNumbers = [...numbers];
  // let newArray = numbers.concat(strings);
  // tempNumbers.push(10); // Add to end
  // tempNumbers.unshift(0); // Add to beginning
  // console.log(numbers);
  // tempNumbers.splice(3, 5, 99); // Add at index 3
  // tempNumbers = numbers.concat(150);
  // tempNumbers.push("amey");
  // tempNumbers.unshift("rajesh");
  // tempNumbers.pop();
  // tempNumbers.shift();
  // console.log("original array ", users);
  // users.unshift({
  //   name: "amey",
  // });
  // console.log("After adding to numbers:", tempNumbers);
  // console.log(numbers);
  let x = users.map((item) => {
    if (item.name.includes("Jane")) {
      // true or false
      // This line does TWO things:
      // 1. First: item.name = "amey"  ← MUTATES the original object!
      // 2. Then: newName = "amey"      ← assigns "amey" to variable
      // let newName = (item.name = "amey");
      // So you're accidentally modifying the original users array!
      return { ...item, name: "amey" };
    }
    return item;
  });
  console.log("original array ", users);
  console.log(x);
};

window.addEventListener("DOMContentLoaded", () => {
  learnArraysComplete();
});
