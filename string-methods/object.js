const learnObjects = () => {
  const person = {
    firstName: "amey",
    middleName: "sunil",
    lastName: "sawant",
    age: 43,
    showFullName: function () {
      return this.firstName + " " + this.middleName + " " + this.lastName; // Added spaces
    },
  };

  // 1. HOW TO ADD PROPERTIES
  person.salary = 50000;
  person["email"] = "amey@example.com"; // Using bracket notation
  console.log("After adding properties:", person);

  // 2. HOW TO ACCESS PROPERTIES
  console.log("Dot notation - salary:", person.salary);
  console.log("Bracket notation - lastName:", person["lastName"]);
  console.log("Full name:", person.showFullName());

  // 3. HOW TO UPDATE PROPERTIES
  person.age = 44;
  person["firstName"] = "Amey"; // Capitalized
  console.log("After updating:", person);

  // 4. HOW TO DELETE PROPERTIES
  delete person.middleName;
  delete person["salary"]; // Can also use bracket notation
  console.log("After deleting middleName and salary:", person);

  // 5. HOW TO CHECK IF PROPERTY EXISTS
  console.log("Has age?", "age" in person); // true
  console.log("Has salary?", person.hasOwnProperty("salary")); // false (deleted)
  console.log("Has middleName?", person.middleName !== undefined); // false

  // 6. HOW TO GET ALL KEYS (property names)
  const keys = Object.keys(person);
  console.log("All keys:", keys); // ["firstName", "lastName", "age", "showFullName", "email"]

  // 7. HOW TO GET ALL VALUES
  const values = Object.values(person);
  console.log("All values:", values);

  // 8. HOW TO GET KEY-VALUE PAIRS
  const entries = Object.entries(person);
  console.log("All entries:", entries);
  // [["firstName", "Amey"], ["lastName", "sawant"], ...]

  // 9. HOW TO LOOP THROUGH OBJECT PROPERTIES
  console.log("Looping through object:");
  for (let key in person) {
    if (typeof person[key] !== "function") {
      // Skip methods
      console.log(`${key}: ${person[key]}`);
    }
  }

  // 10. HOW TO MERGE/COMBINE OBJECTS
  const additionalInfo = {
    city: "Mumbai",
    country: "India",
    profession: "Developer",
  };

  const mergedPerson = { ...person, ...additionalInfo }; // Spread operator
  console.log("Merged object:", mergedPerson);

  // 11. HOW TO FREEZE OBJECT (prevent any changes)
  const frozenPerson = Object.freeze({ ...person });
  // frozenPerson.age = 50; // This won't work - object is frozen

  // 12. HOW TO SEAL OBJECT (prevent adding/deleting, but allow updates)
  const sealedPerson = Object.seal({ ...person });
  sealedPerson.age = 45; // ✅ Works (update)
  // sealedPerson.newProp = "test"; // ❌ Won't work (can't add)
  // delete sealedPerson.age; // ❌ Won't work (can't delete)
  console.log("Sealed person (age updated):", sealedPerson);
};

window.addEventListener("DOMContentLoaded", () => {
  learnObjects();
});
