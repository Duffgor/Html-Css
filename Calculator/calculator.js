const keys = document.querySelector(".calculator_keys");
const result = document.getElementById("result");
const numbers = document.querySelectorAll(".numbers");
const operator = document.querySelectorAll(".operator");
const equal = document.querySelector("equal");
let num1 = [];
let opt;
let reset = false;

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    const btnvalue = event.target.textContent;
    if (reset == true) {
      result.innerHTML = 0;
      reset = false;
    }
    if (result.textContent === "0") {
      result.innerHTML = btnvalue;
    } else {
      result.innerHTML += btnvalue;
    }
    console.log(opt);
    console.log(num1);
  });
});

operator.forEach((oper) => {
  oper.addEventListener("click", (event) => {
    if (event.target.textContent == "=") {
      num1.push(parseFloat(result.innerHTML));
      if (opt == "+") {
        result.textContent = num1[0] + num1[1];
        opt = null;
        num1 = [];
        reset = true;
      } else if (opt == "-") {
        result.textContent = num1[0] - num1[1];
        opt = null;
        num1 = [];
        reset = true;
      } else if (opt == "÷") {
        result.textContent = num1[0] / num1[1];
        opt = null;
        num1 = [];
        reset = true;
      } else if (opt == "×") {
        result.textContent = num1[0] * num1[1];
        opt = null;
        num1 = [];
        reset = true;
      }
      console.log(result.textContent);
    } else if (event.target.textContent == "AC") {
      opt = null;
      num1 = [];
      result.textContent = 0;
    } else {
      num1.push(parseFloat(result.innerHTML));
      result.innerHTML = 0;
      opt = event.target.textContent;
    }
    console.log(opt);
    console.log(num1);
  });
});
