let cijfer = prompt("voer een getal in");
alert(cijfer)
var i,a,b;
if (cijfer == 20) {
    for( i=1;i<=5;i++) {
        for(a = 1;a<=(5 - 1); 5++) {
            document.write("&nbsp;");
        }
        for (b = 1; b <= i; b++) {
            document.write(b + " ");
        }
    }
    document.write("<brb>")
}

document.getElementById("antwoord").innerText = cijfer;