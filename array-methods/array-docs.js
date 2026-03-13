const learnArraysComplete = () => {
  console.log("========== SIMPLE ARRAYS (Primitive Data) ==========");

  // Different types of simple arrays
  let numbers = [5, 2, 8, 1, 9, 3, 7, 4, 6];
  let strings = ["apple", "banana", "cherry", "date", "elderberry"];
  let mixed = [1, "hello", true, null, undefined, 3.14];
  let duplicates = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

  console.log("Numbers array:", numbers);
  console.log("Strings array:", strings);
  console.log("Mixed array:", mixed);
  console.log("Duplicates array:", duplicates);

  console.log("\n========== COMPLEX ARRAYS (Objects) ==========");

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

  console.log("Users array:", users);
  console.log("Products array:", products);
  console.log("Matrix (2D array):", matrix);

  // ========== 1. CREATING ARRAYS ==========
  console.log("\n========== 1. CREATING ARRAYS ==========");

  // Different ways to create arrays
  let arr1 = [1, 2, 3]; // Array literal
  let arr2 = new Array(1, 2, 3); // Array constructor
  let arr3 = new Array(5); // Empty array of length 5
  let arr4 = Array.from("hello"); // ['h', 'e', 'l', 'l', 'o']
  let arr5 = Array.of(1, 2, 3); // [1, 2, 3]
  let arr6 = [...[1, 2, 3]]; // Spread operator

  console.log("Array literal:", arr1);
  console.log("Array constructor:", arr2);
  console.log("Array of length 5:", arr3);
  console.log("Array from string:", arr4);
  console.log("Array.of:", arr5);
  console.log("Spread operator:", arr6);

  // ========== 2. ACCESSING ELEMENTS ==========
  console.log("\n========== 2. ACCESSING ELEMENTS ==========");

  // Simple array access
  console.log("First number:", numbers[0]);
  console.log("Last number:", numbers[numbers.length - 1]);
  console.log("Third string:", strings[2]);
  console.log("Using at() method:", numbers.at(-1)); // Last element

  // Complex array access
  console.log("First user name:", users[0].name);
  console.log("Second product price:", products[1].price);
  console.log("Matrix element [1][1]:", matrix[1][1]); // 5

  // ========== 3. ARRAY PROPERTIES ==========
  console.log("\n========== 3. ARRAY PROPERTIES ==========");

  console.log("Length of numbers:", numbers.length);
  console.log("Length of users:", users.length);
  console.log("Is numbers an array?", Array.isArray(numbers));
  console.log("Is {} an array?", Array.isArray({}));

  // ========== 4. ADDING ELEMENTS ==========
  console.log("\n========== 4. ADDING ELEMENTS ==========");

  // Simple array - adding
  let tempNumbers = [...numbers];
  tempNumbers.push(10); // Add to end
  tempNumbers.unshift(0); // Add to beginning
  tempNumbers.splice(3, 0, 99); // Add at index 3
  console.log("After adding to numbers:", tempNumbers);

  // Complex array - adding objects
  let tempUsers = [...users];
  tempUsers.push({
    id: 6,
    name: "Diana",
    age: 27,
    city: "Miami",
    active: true,
  });
  tempUsers.unshift({
    id: 0,
    name: "Zack",
    age: 22,
    city: "Boston",
    active: false,
  });
  console.log("After adding users:", tempUsers);

  // ========== 5. REMOVING ELEMENTS ==========
  console.log("\n========== 5. REMOVING ELEMENTS ==========");

  // Simple array - removing
  let removeDemo = [1, 2, 3, 4, 5];
  let last = removeDemo.pop(); // Remove last
  // let first = removeDemo.shift(); // Remove first
  let removed = removeDemo.splice(1, 1); // Remove at index 1
  console.log("After removals:", removeDemo);
  console.log("Removed elements:", { last, first, removed });

  // Complex array - removing objects
  let usersForRemoval = [...users];
  let removedUser = usersForRemoval.pop(); // Remove last
  let firstUser = usersForRemoval.shift(); // Remove first
  console.log("Removed last user:", removedUser);
  console.log("Removed first user:", firstUser);
  console.log("Remaining users:", usersForRemoval);

  // ========== 6. ITERATING/LOOPING ==========
  console.log("\n========== 6. ITERATING/LOOPING ==========");

  // Simple array - all loop methods
  console.log("--- for loop ---");
  for (let i = 0; i < strings.length; i++) {
    console.log(`Index ${i}: ${strings[i]}`);
  }

  console.log("--- for...of loop ---");
  for (let fruit of strings) {
    console.log(fruit);
  }

  console.log("--- for...in loop (gives indexes) ---");
  for (let index in strings) {
    console.log(`Index ${index}: ${strings[index]}`);
  }

  console.log("--- forEach loop ---");
  strings.forEach((item, index) => {
    console.log(`${index}: ${item}`);
  });

  // Complex array - looping through objects
  console.log("--- Looping through users ---");
  users.forEach((user, index) => {
    console.log(`${index + 1}. ${user.name} (${user.age}) - ${user.city}`);
  });

  // ========== 7. SEARCHING/FINDING ==========
  console.log("\n========== 7. SEARCHING/FINDING ==========");

  // Simple array searching
  console.log("Index of 3:", numbers.indexOf(3));
  console.log("Last index of 3:", duplicates.lastIndexOf(3));
  console.log("Includes 8?", numbers.includes(8));
  console.log("Includes 100?", numbers.includes(100));

  // Complex array searching
  let foundUser = users.find((user) => user.id === 3);
  console.log("Find user with id 3:", foundUser);

  let foundIndex = users.findIndex((user) => user.name === "Alice");
  console.log("Index of Alice:", foundIndex);

  let laUsers = users.filter((user) => user.city === "LA");
  console.log("All LA users:", laUsers);

  let hasActive = users.some((user) => user.active);
  console.log("Has any active user?", hasActive);

  let allAdults = users.every((user) => user.age >= 18);
  console.log("All users adults?", allAdults);

  // ========== 8. TRANSFORMING ARRAYS ==========
  console.log("\n========== 8. TRANSFORMING ARRAYS ==========");

  // map() - Simple
  let doubled = numbers.map((num) => num * 2);
  console.log("Original numbers:", numbers);
  console.log("Doubled numbers:", doubled);

  let upperFruits = strings.map((fruit) => fruit.toUpperCase());
  console.log("Uppercase fruits:", upperFruits);

  // map() - Complex
  let userNames = users.map((user) => user.name);
  console.log("Just user names:", userNames);

  let userSummaries = users.map((user) => ({
    fullName: user.name.toUpperCase(),
    ageGroup: user.age >= 30 ? "Senior" : "Junior",
    location: user.city,
  }));
  console.log("User summaries:", userSummaries);

  // filter() - Simple
  let evenNumbers = numbers.filter((num) => num % 2 === 0);
  let oddNumbers = numbers.filter((num) => num % 2 !== 0);
  let greaterThan5 = numbers.filter((num) => num > 5);
  console.log("Even numbers:", evenNumbers);
  console.log("Odd numbers:", oddNumbers);
  console.log("Numbers > 5:", greaterThan5);

  // filter() - Complex
  let activeUsers = users.filter((user) => user.active);
  let highEarners = users.filter((user) => user.salary > 55000);
  let nycUsers = users.filter((user) => user.city === "NYC");
  console.log("Active users:", activeUsers);
  console.log("High earners:", highEarners);
  console.log("NYC users:", nycUsers);

  // reduce() - Simple
  let sum = numbers.reduce((total, num) => total + num, 0);
  let max = numbers.reduce((max, num) => (num > max ? num : max), numbers[0]);
  let min = numbers.reduce((min, num) => (num < min ? num : min), numbers[0]);
  console.log("Sum of numbers:", sum);
  console.log("Max number:", max);
  console.log("Min number:", min);

  // reduce() - Complex
  let totalSalary = users.reduce((total, user) => total + user.salary, 0);
  let avgSalary = totalSalary / users.length;
  console.log("Total salary:", totalSalary);
  console.log("Average salary:", avgSalary);

  // Group by city using reduce
  let usersByCity = users.reduce((acc, user) => {
    if (!acc[user.city]) {
      acc[user.city] = [];
    }
    acc[user.city].push(user);
    return acc;
  }, {});
  console.log("Users grouped by city:", usersByCity);

  // ========== 9. SORTING ==========
  console.log("\n========== 9. SORTING ==========");

  // Simple array sorting
  let unsorted = [3, 1, 4, 1, 5, 9, 2, 6];
  console.log("Unsorted:", unsorted);

  let ascending = [...unsorted].sort((a, b) => a - b);
  let descending = [...unsorted].sort((a, b) => b - a);
  console.log("Ascending:", ascending);
  console.log("Descending:", descending);

  // String sorting
  let fruitCopy = [...strings];
  console.log("Sorted fruits:", fruitCopy.sort());
  console.log("Reverse sorted:", fruitCopy.reverse());

  // Complex sorting - objects
  let byAgeAsc = [...users].sort((a, b) => a.age - b.age);
  let byAgeDesc = [...users].sort((a, b) => b.age - a.age);
  let byName = [...users].sort((a, b) => a.name.localeCompare(b.name));
  let bySalary = [...users].sort((a, b) => b.salary - a.salary);

  console.log(
    "Sorted by age (asc):",
    byAgeAsc.map((u) => ({ name: u.name, age: u.age })),
  );
  console.log(
    "Sorted by age (desc):",
    byAgeDesc.map((u) => ({ name: u.name, age: u.age })),
  );
  console.log(
    "Sorted by name:",
    byName.map((u) => u.name),
  );
  console.log(
    "Sorted by salary:",
    bySalary.map((u) => ({ name: u.name, salary: u.salary })),
  );

  // ========== 10. COMBINING ARRAYS ==========
  console.log("\n========== 10. COMBINING ARRAYS ==========");

  let arrA = [1, 2, 3];
  let arrB = [4, 5, 6];
  let arrC = [7, 8, 9];

  // concat method
  let combined1 = arrA.concat(arrB, arrC);
  console.log("Concat:", combined1);

  // Spread operator
  let combined2 = [...arrA, ...arrB, ...arrC];
  console.log("Spread:", combined2);

  // push with spread
  let combined3 = [...arrA];
  combined3.push(...arrB);
  console.log("Push with spread:", combined3);

  // ========== 11. SLICING AND SPLICING ==========
  console.log("\n========== 11. SLICING AND SPLICING ==========");

  // slice (doesn't modify original)
  let original = [1, 2, 3, 4, 5];
  let sliced = original.slice(1, 4); // index 1 to 4 (4 excluded)
  console.log("Original:", original);
  console.log("Sliced (1-4):", sliced);
  console.log("Slice from index 2:", original.slice(2));
  console.log("Last 2 elements:", original.slice(-2));

  // splice (modifies original)
  let spliceDemo = [1, 2, 3, 4, 5];
  let removedSplice = spliceDemo.splice(2, 2, 99, 100); // Remove 2 from index 2, add 99,100
  console.log("After splice:", spliceDemo);
  console.log("Removed items:", removedSplice);

  // ========== 12. ARRAY TO STRING AND VICE VERSA ==========
  console.log("\n========== 12. ARRAY TO STRING AND VICE VERSA ==========");

  let csv = strings.join(", ");
  console.log("Array to string (join):", csv);

  let backToArray = csv.split(", ");
  console.log("String to array (split):", backToArray);

  console.log("toString():", numbers.toString());
  console.log("toLocaleString():", numbers.toLocaleString());

  // ========== 13. FLATTENING NESTED ARRAYS ==========
  console.log("\n========== 13. FLATTENING NESTED ARRAYS ==========");

  let nested = [1, [2, 3], [4, [5, 6]]];
  console.log("Nested array:", nested);
  console.log("Flat (depth 1):", nested.flat());
  console.log("Flat (depth 2):", nested.flat(2));

  // FlatMap
  let sentences = ["hello world", "good morning"];
  let words = sentences.flatMap((s) => s.split(" "));
  console.log("FlatMap result:", words);

  // ========== 14. SET OPERATIONS (UNIQUE VALUES) ==========
  console.log("\n========== 14. SET OPERATIONS ==========");

  // Remove duplicates from simple array
  let unique = [...new Set(duplicates)];
  console.log("Original with duplicates:", duplicates);
  console.log("Without duplicates:", unique);

  // Get unique cities from complex array
  let uniqueCities = [...new Set(users.map((user) => user.city))];
  console.log("Unique cities:", uniqueCities);

  // ========== 15. CHECKING CONDITIONS ==========
  console.log("\n========== 15. CHECKING CONDITIONS ==========");

  console.log(
    "All numbers > 0?",
    numbers.every((n) => n > 0),
  );
  console.log(
    "Some numbers > 8?",
    numbers.some((n) => n > 8),
  );
  console.log(
    "All users have names?",
    users.every((u) => u.name),
  );
  console.log(
    "Any user from Chicago?",
    users.some((u) => u.city === "Chicago"),
  );

  // ========== 16. FILLING ARRAYS ==========
  console.log("\n========== 16. FILLING ARRAYS ==========");

  let fillDemo = new Array(5).fill(0);
  console.log("Fill with 0:", fillDemo);

  let partialFill = [1, 2, 3, 4, 5].fill(99, 2, 4);
  console.log("Partial fill (index 2-4):", partialFill);

  // ========== 17. REVERSING ARRAYS ==========
  console.log("\n========== 17. REVERSING ARRAYS ==========");

  let reverseDemo = [1, 2, 3, 4, 5];
  let reversed = [...reverseDemo].reverse();
  console.log("Original:", reverseDemo);
  console.log("Reversed:", reversed);

  // ========== 18. DESTRUCTURING ==========
  console.log("\n========== 18. DESTRUCTURING ==========");

  // Simple array destructuring
  let [first, second, ...rest] = numbers;
  console.log("First:", first);
  console.log("Second:", second);
  console.log("Rest:", rest);

  // Swapping variables
  let a = 1,
    b = 2;
  [a, b] = [b, a];
  console.log("Swapped - a:", a, "b:", b);

  // Object destructuring from array
  let [{ name: firstName }, , { city: thirdCity }] = users;
  console.log("First user name:", firstName);
  console.log("Third user city:", thirdCity);

  // ========== 19. PRACTICAL EXAMPLES ==========
  console.log("\n========== 19. PRACTICAL EXAMPLES ==========");

  // Example 1: Calculate statistics
  let stats = {
    total: numbers.reduce((sum, n) => sum + n, 0),
    average: numbers.reduce((sum, n) => sum + n, 0) / numbers.length,
    max: Math.max(...numbers),
    min: Math.min(...numbers),
  };
  console.log("Number statistics:", stats);

  // Example 2: Inventory report
  let inventoryReport = {
    totalProducts: products.length,
    averagePrice:
      products.reduce((sum, p) => sum + p.price, 0) / products.length,
    mostExpensive: products.reduce((max, p) => (p.price > max.price ? p : max)),
    byCategory: products.reduce((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1;
      return acc;
    }, {}),
  };
  console.log("Inventory report:", inventoryReport);

  // Example 3: User analytics
  let userAnalytics = {
    totalUsers: users.length,
    averageAge: users.reduce((sum, u) => sum + u.age, 0) / users.length,
    activeUsers: users.filter((u) => u.active).length,
    usersByCity: users.reduce((acc, u) => {
      acc[u.city] = (acc[u.city] || 0) + 1;
      return acc;
    }, {}),
    totalSalary: users.reduce((sum, u) => sum + u.salary, 0),
  };
  console.log("User analytics:", userAnalytics);

  // Example 4: Shopping cart total
  let cart = [
    { product: "Laptop", price: 999, quantity: 1 },
    { product: "Mouse", price: 25, quantity: 2 },
    { product: "Keyboard", price: 75, quantity: 1 },
  ];

  let cartTotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  console.log("Cart total:", cartTotal);

  // Example 5: Search and filter
  let searchTerm = "a";
  let searchResults = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  console.log(`Products containing "${searchTerm}":`, searchResults);

  // Example 6: Pagination
  let page = 2;
  let pageSize = 2;
  let paginatedUsers = users.slice((page - 1) * pageSize, page * pageSize);
  console.log(`Page ${page} of users:`, paginatedUsers);

  // ========== 20. CHAINING METHODS ==========
  console.log("\n========== 20. CHAINING METHODS ==========");

  let result = numbers
    .filter((n) => n % 2 === 0) // Get even
    .map((n) => n * 3) // Multiply by 3
    .sort((a, b) => b - a) // Sort descending
    .reduce((sum, n) => sum + n, 0); // Sum

  console.log("Chained operation result:", result);

  // Complex chaining
  let topEarnersInNYC = users
    .filter((u) => u.city === "NYC" && u.active)
    .map((u) => ({ name: u.name, salary: u.salary }))
    .sort((a, b) => b.salary - a.salary)
    .slice(0, 2);

  console.log("Top 2 earners in NYC:", topEarnersInNYC);
};

window.addEventListener("DOMContentLoaded", () => {
  learnArraysComplete();
});
