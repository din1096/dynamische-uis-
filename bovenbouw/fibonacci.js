function fibonacci(x) {
    let a = 0;
    let b = 1;
    let reeks = [a, b];
    for (let i = 0; i < x - 2; i++) {
        let temp = b;
        b = a + b;
        a = temp;
        reeks.push(b);
    }
    return [reeks];
}
document.getElementById("antwoord").innerText = fibonacci;
let aantal = parseInt(prompt("voer een getal in:"));
alert(aantal);
console.log(fibonacci(aantal));

