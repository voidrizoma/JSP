//Scope combiando con funciones

//IIFE Inmediatly invoque function expression

(function () {
  let color = "green";

  function printColor() {
    console.log(color);
  }
  printColor();
})();

// Funciones que regresan funciones
function makeColorPrinter(color) {
  let colorMessage = `The color is ${color}`;
  return function () {
    console.log(colorMessage);
  };
}

let greenColorPrinter = makeColorPrinter("green");
console.log(greenColorPrinter());

//Variables privadas
const counter = {
  count: 3,
};
console.log(counter.count);

function makeCounter(n) {
  let count = n;
  
  return {
    increase: function () {
      count = count + 1;
    },
    decrease: function () {
      count = count - 1;
    },
    getCount: function () {
      return count;
    },
  };
}

let counter = makeCounter(3);
console.log(counter.getCount());
