const naam_Invoer = prompt("Vul uw naam in", "Uw naam");
const geboorteJaar = prompt("Vul uw geboorte datum in", "Jaar");

document.getElementById("welkom").innerHTML =
  "welkom op mijn site " + naam_Invoer + " geboren in het jaar " + geboorteJaar;

const ditJaar = 2022;
const leeftijd = ditJaar - parseInt(geboorteJaar);
const opdracht2 = "Je bent " + leeftijd + " jaar gelden geboren";
document.getElementById("leeftijdis").innerHTML = opdracht2;

console.log(opdracht2.length);
console.log(opdracht2.indexOf("n"));

if (geboorteJaar == 1980) {
  console.log("True");
} else {
  console.log("false");
}
