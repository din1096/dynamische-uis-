fetch('opdracht2_bijlage.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function appendData(data) {
    var mainContainer = document.getElementById("myData");
    data.forEach(person => {
        var div = document.createElement("div");
        div.innerHTML = 'Naam: ' + person.voornaam + ' ' + person.achternaam + '<br>' +
                        'Nationaliteit: ' + person.nationaliteit + '<br>' +
                        'Leeftijd: ' + person.leeftijd + '<br>' +
                        'Gewicht: ' + person.gewicht + '<br><br>';
        mainContainer.appendChild(div);
    });
}
