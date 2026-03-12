const myFunction = () => {
  /* 
  NOTE -
1. concat() joins two or more strings or array
2. Returns a NEW array that combines:
3. does not change the original array
*/

  let name = "amey";
  let middlename = "sunil";
  let surname = "sawant";

  let myArray = [
    {
      id: 1,
      title: "Azardian Soap",
      price: 70,
    },
    {
      id: 2,
      title: "Lazure Soap",
      price: 170,
    },
    {
      id: 3,
      title: "Otor Soap",
      price: 40,
    },
  ];
  let myArray2 = [
    {
      id: 1,
      title: "Azardian Soap 2",
      price: 70,
    },
    {
      id: 2,
      title: "Lazure Soap 2",
      price: 170,
    },
    {
      id: 3,
      title: "Otor Soap 2",
      price: 40,
    },
  ];
  let myObject = {
    id: 4,
    title: "new title",
    price: 500,
  };

  // 1. concat() - joins two strings or join two or multiple arrays
  // console.log(name.concat(" ", middlename, " ", surname));
  // console.log(myArray.concat(myArray2.concat(myObject)));
  // it returns joined string
  // let returnedValue = name.concat(middlename, surname);
  // console.log(returnedValue);

  // it does not change original array and returns a string
  // let returnedValue = myArray.concat(myArray2.concat(myObject));
  // let returnedValue = myArray.concat(myObject);
  // console.log(returnedValue);
  // console.log(myArray);
  // console.log(myArray2);
};

window.addEventListener("DOMContentLoaded", () => {
  myFunction();
});
