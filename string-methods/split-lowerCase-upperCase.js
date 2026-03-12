const toTitleCase = (str) => {
  /* 
NOTE -
1. Returns a NEW string with all characters converted to lowercase.
*/

  let name = "amey";
  let middlename = "sunil";
  let surname = "sawant";
  let fullName = "amey sunil sawant";
  let fullName2 = "Amey Sunil Sawant";
  let fullName3 = "AMEY SUNIL SAWANT";

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

  // console.log(fullName3);
  // let makeLowerCase = fullName3.toLowerCase(); // return lowercase
  // console.log(makeLowerCase);

  // console.log(fullName);
  // let makeUpperCase = fullName.toUpperCase(); // return upperCase
  // console.log(makeUpperCase);

  // return str
  //   .split(" ")
  //   .map((item) => item[0].toUpperCase() + item.slice(1))
  //   .join(" ");

  let x = str.split(" ");
  console.log(x);
  x = x
    .map((item) => {
      return item[0].toUpperCase() + item.slice(1);
    })
    .join(" ");
  return x;
};

window.addEventListener("DOMContentLoaded", () => {
  let x = toTitleCase("amey sunil sawant");
  console.log(x);
  // console.log(typeof x);
});
