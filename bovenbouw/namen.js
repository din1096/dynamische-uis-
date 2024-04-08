let names = [];

while (true) {
  let name = prompt('welke naam wil je invullen');
  if (names.includes(name)) {
    alert("Dit heeft u al gekozen");
  } else {
    names.push(name);
  }
  if (names.length >= 3) {
    let question = prompt("Wilt u nog een naam invoeren?");
    if (question === "nee") {
      break;
    }
  }
}
document.getElementById('antwoord').innerText = names;
