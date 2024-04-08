let alert = Number(prompt("geef een getal: ")) 

for (let i = alert; i > 0; i--){
    const nummer = []
    for (let b = i; b > 0; b--){
        nummer.push(b)
    }
    let test = nummer.reverse()
    document.write(test.join("-"))
    document.write("<br>")
}

