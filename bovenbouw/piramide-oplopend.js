let alert = Number(prompt("geef een getal: ")) +2

for (let i = 0; i < alert; i++){
    const nummer = []
    for (let a = 1; a < i; a++){
        nummer.push(a)
    }
    let test = nummer.join("-")
    document.write(test)
    document.write("<br>")
}


