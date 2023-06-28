function change(nummer){
    reset()
    document.getElementById("img").src="images/"+nummer+".jpg" ;
    document.getElementById("container").style.backgroundImage="url(images/bg"+nummer+".jpg)" ;
    document.getElementById(nummer).innerHTML= Number(document.getElementById(nummer).innerHTML) + 1;
    document.getElementById(nummer).style.backgroundColor="red"
    document.getElementById(nummer).removeAttribute("onclick");
}
function reset(){
    for (i = 1; i < 4; i++){
        document.getElementById(i).style.backgroundColor="green";
        document.getElementById(i).setAttribute("onclick", "change("+i+")");
    }
}