const FRIS_PRIJS = 2.00;
const BIER_PRIJS = 3.00;
const WIJN_PRIJS = 4.00;
var bon = [];

while (true) {
    let koop = prompt('welke drinken wil je kopen?')
    if (koop == "stop") {
        break;
    } else {
        if (koop !== 'fris' && koop !== 'bier' && koop !== 'wijn') {
            alert('dat hebben we niet');
        } else {
            let hoeveel = prompt("hoeveel " + koop + " wil je hebben?");
            let lijst = true;
            for (let i = 0;  i < bon.length; i++) {
                if (bon[i].koop == koop) {
                    bon[i].hoeveel = parseInt(bon[i].hoeveel) + parseInt(hoeveel);
                    lijst = false;
                    break;
                }
            }
            if (!lijst) {
                bon.push({koop: koop, hoeveel: hoeveel});
            }
            alert(hoeveel + " " + koop + " is toegevoegd aan de bon");
        }
    }
}

(bon.length > 0); {
    let output = "bon:<br>";
    let totaal_prijs = 0;
    for ( let i = 0; i < bon.length; i++) {
        let koop = bon[i].koop;
        let hoeveel = bon[i].hoeveel;
        let prijs = 0;
        if (koop == "fris") {
            prijs = FRIS_PRIJS;
        } else if (koop == "bier") {
            prijs = BIER_PRIJS;
        } else if (koop == 'wijn') {
            prijs = WIJN_PRIJS;
        }
        totaal += prijs * hoeveel
        output += hoeveel + " " + prijs + " (" + prijs.toFixed(2) + " euro = " + totaal.toFixed(2) + "euro<br>";
        totaal_prijs += totaal;
    }
output += "totaal:" + totaal_prijs.toFixed(2) + "euro";
document.getElementById("bonnetje").innerHTML = output;
}
