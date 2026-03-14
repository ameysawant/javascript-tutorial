const learnArraysComplete = () => {
  // "========== SIMPLE ARRAYS (Primitive Data) =========="
  // Different types of simple arrays
  let numbers = [5, 2, 8, 1, 9, 3, 7, 4, 6];
  let strings = ["apple", "banana", "cherry", "date", "elderberry"];
  let mixed = [1, "hello", true, null, undefined, 3.14];
  let duplicates = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

  // Array of objects - Users
  let obj = {
    id: 1,
    name: "John",
    age: 25,
    city: "NYC",
    active: true,
    salary: 90000,
  };
  let users = [
    { id: 1, name: "John", age: 25, city: "NYC", active: true, salary: 90000 },
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
  // console.log("original array ", users);
  // console.log(x);
  // let z = users[0];
  // let spreadThis = { ...z };
  // console.log(x);
  // console.log(x.name);
  // console.log(spreadThis.name);

  // const findNames = users.filter((item) => item.name === "Jane");
  // console.log(findNames);

  // const findNames = users.findIndex((item) => item.salary < 70000);
  // console.log(findNames);

  // let hasEven = numbers.some((num) => num % 2 === 0);
  // // Returns true if at least one element passes the test
  // console.log(hasEven); // true

  // let allPositive = numbers.every((num) => num > 3);
  // // Returns true if all elements pass the test
  // console.log(allPositive); // true

  // Shopping cart items
  const cart = [
    { item: "Laptop", price: 999, quantity: 1 },
    { item: "Mouse", price: 25, quantity: 2 },
    { item: "Keyboard", price: 75, quantity: 1 },
    { item: "USB Cable", price: 15, quantity: 3 },
  ];

  // // Calculate total price including quantities
  const totalPrice = cart.reduce((total, currentItem) => {
    console.log(total, currentItem);
    return total + currentItem.price * currentItem.quantity;
  }, 0);

  console.log(totalPrice); // 999 + (25*2) + 75 + (15*3) = 999 + 50 + 75 + 45 = 1169

  const groupedByCity = users.reduce((acc, user) => {
    console.log("acc= ", { ...acc }, "userobject= ", user);
    // // If this city doesn't exist in our accumulator yet, create an empty array
    if (!acc[user.city]) {
      acc[user.city] = [];
    }
    // Add the current user to their city group
    acc[user.city].push(user.name); // NYC: ["Alice"]
    return acc;
  }, {}); // Start with empty object
  // console.log(users);
  console.log(groupedByCity);

  //   const firstPersonInCity = users.reduce((acc, user) => {
  //   console.log("acc:", { ...acc }, "| checking", user.city); //{ id: 1, name: "John", age: 25, city: "NYC", active: true, salary: 90000 },

  //   // ONLY store if this city doesn't exist yet
  //   if (!acc[user.city]) {
  //     acc[user.city] = user.name; //{NYC: 'John', LA: 'Jane'}
  //     console.log(`  → First person in ${user.city} is ${user.name}`);
  //   } else {
  //     console.log(
  //       `  → ${user.city} already has ${acc[user.city]}, ignoring ${user.name}`,
  //     );
  //   }

  //   return acc;
  // }, {});

  // console.log("Final (only first person per city):", firstPersonInCity);
};

window.addEventListener("DOMContentLoaded", () => {
  learnArraysComplete();
});
