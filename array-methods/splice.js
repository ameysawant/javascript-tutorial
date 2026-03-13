const learnSplice = () => {
  let numbers = [5, 2, 8, 1, 9, 3, 7, 4, 6];
  let strings = ["apple", "banana", "cherry", "date", "elderberry"];
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
  ];

  // NOTE -
  // IT takes negative index also.
  // it changes original array

  //   console.log("original array - ", strings);

  // remove everything and reutrns empty array
  //   strings.splice(0);

  // Delete from index 1 to the END of array
  //   strings.splice(1);
  //   console.log("modified ", strings);

  // Delete from index 2 to the END of array
  //   strings.splice(2);
  //   console.log("modified ", strings);

  //   // Delete from index 1 to 3 and keep rest all the items as it is
  //   strings.splice(1, 3);
  //   console.log("modified ", strings);

  // Go to index 1, remove nothing, and add 'kiwi' right there
  //   strings.splice(1, 0, "kiwi");
  //   console.log("modified ", strings);

  // Go to index 1, remove 1 item, and add 'kiwi' in its place
  //   strings.splice(1, 1, "kiwi");
  //   console.log("modified ", strings);

  //   // Delete from index 1 to the END of array
  //   console.log("original array - ", [...users]);
  //   users.splice(1);
  //   console.log(users);

  //   // Delete from index 2 to the END of array
  //   console.log("original array - ", [...users]);
  //   users.splice(2);
  //   console.log(users);

  //   // Delete from index 1 to 3 and keep rest all the items as it is
  //   console.log("original array - ", [...users]);
  //   users.splice(1, 3);
  //   console.log(users);

  //   // Delete from index 1 to 3 and keep rest all the items as it is
  //   console.log("original array - ", [...users]);
  //   users.splice(1, 3, {
  //     id: 6,
  //     name: "Amey",
  //     age: 43,
  //     city: "Mumbai",
  //     active: true,
  //     salary: 50000,
  //   });
  //   console.log(users);

  //   // Go to index 1, remove nothing, and add 'object' right there
  //   console.log("original array - ", [...users]);
  //   users.splice(1, 0, {
  //     id: 6,
  //     name: "Amey",
  //     age: 43,
  //     city: "Mumbai",
  //     active: true,
  //     salary: 50000,
  //   });
  //   console.log(users);

  // Go to index 1, remove 1 item, and add 'object' in its place
  console.log("original array - ", [...users]);
  users.splice(1, 1, {
    id: 6,
    name: "Amey",
    age: 43,
    city: "Mumbai",
    active: true,
    salary: 50000,
  });
  console.log(users);
};

window.addEventListener("DOMContentLoaded", () => {
  learnSplice();
});
