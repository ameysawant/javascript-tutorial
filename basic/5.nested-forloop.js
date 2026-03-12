const simpleForLoop = () => {
  //         1      4      4
  for (let i = 1; i < 5; i++) {
    //         0      0  5  2
    for (let j = 0; j < 5; j++) {
      document.write("*");
    }
    document.write("<br>");
  }
};

window.addEventListener("DOMContentLoaded", () => {
  simpleForLoop();
});
