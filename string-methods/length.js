const myFunction = () => {
  // length works on both array and strings
  // strings are immutable and arrays are mutable
  let letters = "abc";
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
  let lettersLength = letters.length;
  let myArrayLength = myArray.length;
  console.log(myArray);
  console.log("letters length ", lettersLength);
  console.log("my array length ", myArrayLength);
};

window.addEventListener("DOMContentLoaded", () => {
  myFunction();
});
