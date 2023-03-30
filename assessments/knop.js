let button = document.createElement('button');
button.innerHTML = "klik hier";
button.setAttribute("onclick", "test()");
document.body.appendChild(button);

function test(){
    document.getElementById("welkom").innerHTML = 'welkom dinho'

}