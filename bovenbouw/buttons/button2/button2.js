var totalbuttons = 30;
var totalrows = 5;
const container = document.getElementById('container');


for (var a = 0; a < totalbuttons; a++) {
    var button = document.createElement('button');
    button.innerHTML = a + 1;
    button.className = 'btn';
    button.addEventListener('click', function() {
        if(this.style.backgroundColor === 'red'){
            this.style.backgroundColor = 'green';
        }
        else{
            this.style.backgroundColor = 'red';
        }
    });
    container.appendChild(button);
}
