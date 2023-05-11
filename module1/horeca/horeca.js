const lijst = {

}
const prijs = {
    fris: 2,
    bier: 3,
    wijn: 4,
}
function vraag_drank() {
    while (true) {
        var drinken = prompt("wat voor drinken wilt u bestellen?");
        if (drinken in prijs || drinken == 'stop') {
            break;
        } else {
            alert('dat producht hebben we niet');
        }
    }
    return drinken
}
function vraag_aantal(drinken) {
    while (true) {
        var aantal = parseInt(prompt('hoeveel' + drinken + 'wil je ?'))
        if (!isNaN(aantal)) {
            break
        }

    }
    return aantal
}
function voeg_toe(drinken,lijst,aantal) {
    if (drinken in lijst) {
        lijst[drinken] += aantal;
    } else {
        lijst[drinken] = aantal;
    }
    console.dir(lijst) 
    return lijst
}
function bestellen() {
    while (true) {
        let drinken = vraag_drank()
        
        if (drinken in prijs) {
 {
                let aantal = vraag_aantal(drinken)
                voeg_toe(drinken,lijst,aantal)
            }
        } else if (drinken == 'stop') {
            break;
        }
    }
}
bestellen();

let totaal = 0;
let fris_prijs = 0
for ( x in lijst) {
    console.log("prijs:" + prijs[x] + 'euro')
    console.log("aantal" + lijst[x])
    totaal += prijs[x] * lijst[x]
    fris_prijs += prijs[0] * lijst[x]
}
console.log(totaal)
let totaal_prijs = "totaal:" + Math.round(totaal) + "euro"
let prijs_fris = "totaal:" + Math.round(fris_prijs) + "euro"
console.log(prijs_fris)
document.getElementById("totaal_prijs").innerHTML = totaal_prijs
