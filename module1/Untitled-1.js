// de array heeft als index 0 1 2
let color = ['white']

// het object hieronder heeft als index firstname lastname en id
let person = {lastname : 'doe',firstname : 'john', id : '5566'}

let bestelling = {bier: 0, wijn:0, fris : 0,};
bestelling['bier'] +=1
document.write("<br>");
document.write('bier : ' + bestelling['bier']);