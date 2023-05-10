const lijst = {

}
const prijs = {
    fris: 2,
    bier: 3,
    wijn: 4,
}

function bestellen() {
    while (true) {
        let drinken = prompt("wat voor drinken wilt u bestellen?");

        if (drinken in prijs) {
            while (true) {
                let aantal = parseInt(prompt('hoeveel' + drinken + 'wil je ?'))
                if (drinken in lijst) {
                    lijst[drinken] += aantal;
                } else {
                    lijst[drinken] = aantal;
                }
                break;
            }
        } else if (drinken == 'stop') {
            break;
        } else {
            alert('dat producht hebben we niet');
        }
    }
}
bestellen();

let totaal = 0;

for ( x in lijst) {
    console.log("prijs:" + prijs[x] + 'euro')
    console.log("aantal" + lijst[x])
    totaal += prijs[x] * lijst[x]
}
console.log(totaal)
let totaal_prijs = "totaal:" + Math.round(totaal) + "euro"
document.getElementById("totaal_prijs").innerHTML = totaal_prijs