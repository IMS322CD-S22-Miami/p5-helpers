let p5text = "nothing entered yet";
let result = "no match";

const myData = {
  fruit: "banana",
  vegetable: "broccoli",
  protein: "tofu"
};

function setup() {
  createCanvas(400, 400).parent("#p5-canvas");
  textSize(24);
}

function draw() {
  background(100);
  text(p5text, 100, 100);
  text(result, 100, 300);
}

let userInput = document.getElementById("user-input");

userInput.addEventListener("change", () => {
  let newText = userInput.value;
  p5text = newText;
  if(newText in myData) {
    result = myData[newText];
  } else result = "no match";
});