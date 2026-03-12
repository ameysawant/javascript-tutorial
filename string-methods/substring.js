const myFunction = () => {
  /* 

substring(start, end) - substing i smilar to slice but it does not accept negative indexes.

*/

  let name = "amey";
  let middlename = "sunil";
  let surname = "sawant";
  let fullName = ["amey", "sunil", "sawant"];

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

  // let returnedValue = name.concat(" ", middlename, " ", surname);
  // let x = returnedValue.slice();
  // console.log(returnedValue);
  // console.log(x);

  // console.log(fullName.slice(1, 2));

  // console.log(myArray);
  // console.log(myArray.slice(-1)); // remove 1st and 2nd objects from an array
  // console.log(myArray[0].title.slice(-4)); // Soap
};

window.addEventListener("DOMContentLoaded", () => {
  myFunction();
});
