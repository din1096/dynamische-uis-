let uitleg = "In een parkeergarage passen 80 auto's op de begane grond en 120 op een verdieping.\n"+
"Vraag het gewenste aantal auto's in de garage en bereken het aantal verdiepingen wat je nodig hebt.";

alert(uitleg);
let gewenste_aantal_autos = prompt("Hoeveel autos wilt u kwijt in de parkeergarage?");
let som = Math.ceil((gewenste_aantal_autos - 80) / 120);

alert(som)


document.getElementById("antwoord").innerText = som;

console.log(som)
console.log('Om het gewenste aantal autos kwijt te kunnen heb ik verdiepingen nodig.')
