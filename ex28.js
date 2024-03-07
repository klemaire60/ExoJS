console.log("Je suis le main.js");

const temp1 = new Temperature();
const temp2 = new Temperature();

temp1.setTemperature(34);
temp2.setTemperature(28);

document.getElementById("t1").innerHTML = `Temperature 1 : ${temp1.getTemperature()}°`;
document.getElementById("t2").innerHTML = `Temperature 2 : ${temp2.getTemperature()}°`;