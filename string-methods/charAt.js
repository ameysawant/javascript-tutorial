const myFunction = () => {
  /* 
There are 4 methods for extracting string characters:
*/

  let letters = "amey";

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

  // 1. at() - just pass index no. it will return the indexed element - It allows the use of negative indexes
  // console.log(letters.at(-2));
  // console.log(myArray.at(3));

  // 2. charAt() - returns the character of which index is passed
  // console.log(letters.charAt(2));
  // console.log(myArray[0].title.charAt(3));

  // 3. charCodeAt() - returns the unicode of the character just pass index no.
  // console.log(letters.charCodeAt(1));
  // console.log(myArray[0].title.charCodeAt(3));

  // 4. [] - just pass index no. to acess the letter using square bracket notation
  // console.log(letters[0]);
  // console.log(myArray[0].title[1]);
};

window.addEventListener("DOMContentLoaded", () => {
  myFunction();
});
