var totalbuttons = 30;
const container = document.getElementById('container');
const colours = ['red', 'pink', 'blue', 'black'];

for (var a = 0; a < totalbuttons; a++) {
    var button = document.createElement('button');
    button.innerHTML = a + 1;
    button.className = 'btn';
    button.clickCount = 0;

    button.addEventListener('click', function() {
        this.clickCount++;
        if (this.clickCount <= colours.length) {
            this.style.backgroundColor = colours[this.clickCount - 1];
        } else {
            this.style.visibility = 'hidden';
        }
    });

    container.appendChild(button);
}
