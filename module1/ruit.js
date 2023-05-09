
function ruit(){
    let line = ""
    let nummer = document.getElementById("nummer").value
    for(let i=1; i<= nummer; i++){
        if (i > 1 ){
            line += "-";}
        line += i
         
        console.log(line)
    }
}