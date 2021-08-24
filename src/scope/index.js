//Global Scope
//Window es un scope de àmbito global
let message = "hello";

function printNumber() {
  let i;
  for (i = 0; i < 10; i++) {
    function eventualyPrint(n) {
      setTimeout(() => {
        console.log(n);
      }, 1000);
    }
    eventualyPrint(i);
  }
}

printNumber();

//Blok scope

function printNumbers2() {
    for (let i = 0; i < 10; i++) {
      setTimeout(function() {
        console.log(i);
      }, 100);
    }
  }

  printNumbers2();

  //module scope... la vida de una variable se limita al archivo donde estè definida