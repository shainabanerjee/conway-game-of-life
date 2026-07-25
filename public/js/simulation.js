let intervalId = null;

function startSimulation() {
  if (intervalId === null) {
    intervalId = setInterval(function () { 
      document.getElementById("step").click();
    }, 100);
  }
}

function stopSimulation() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
} 

// once you've replaced conway.js with your solution to the previous assignment
// this will print [[false, true, false], [false, true, false]]
console.log(
  stepBoard([
    [true, false, true],
    [false, false, true],
  ]),
);
