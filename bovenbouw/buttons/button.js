const container = document.getElementById('container');

function createButton(text) {
    const button = document.createElement('button');
    button.textContent = text;
    return button;
}
function changebackground(color){
    document.body.style.background = color;
}
const button1 = createButton('rood');
const button2 = createButton('blauw');
const button3 = createButton('groen');

button1.addEventListener('click', function() {
    changebackground('red');
});

button2.addEventListener('click', function() {
    changebackground('blue');
});

button3.addEventListener('click', function() {
    changebackground('green');
});

container.appendChild(button1);
container.appendChild(button2);
container.appendChild(button3);
