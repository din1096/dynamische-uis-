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

alert = alert - 3

for (let i = alert; i > 0; i--){
    const nummer = []
    for (let b = i; b > 0; b--){
        nummer.push(b)
    }
    let test2 = nummer.reverse()
    document.write(test2.join("-"))
    document.write("<br>")
}