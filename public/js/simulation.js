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
