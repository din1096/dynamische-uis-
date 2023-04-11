const FRIS_PRIJS = 2.00;
const BIER_PRIJS = 3.00;
const WIJN_PRIJS = 4.00;
var bon = [];


while (true) {
    let koop = prompt('welke drinken wil je kopen?')
    alert(koop)
    if (koop == "niks") {
        break;
    } else {
        if (koop !== 'fris' && koop !== 'bier' && koop !== 'wijn') {
            alert('dat producht hebben we niet');
        } else {
            let hoeveel = prompt("hoeveel " + koop + " wil je hebben?");
            let lijst = true;
            for (i = 0; < bon.length i++) {
                if (bon[i].koop == koop) {
                    bon[i].aantal = parseInt(bon[i].aantal) + parseInt(aantal);
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

document.getElementById("bonnetje").innerText = bon;

