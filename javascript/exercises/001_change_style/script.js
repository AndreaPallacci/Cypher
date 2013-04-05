//Cambia lo stile a rosso
function changeToRed() {
    alert('trasformo in rosso');
    var body = document.getElementsByTagName('body');
    //varie regole da cambiare
    body[0].style.color = 'red';}


//Cambia lo stile a blue
function changeToBlue() {
    alert('trasformo in blue');
    var body = document.getElementsByTagName('body');
    //varie regole da cambiare
    body[0].style.color = 'blue';
}

function increaseFont() {
    var content = document.getElementById('content');
    content.style.fontSize = '16px';
}

function decreaseFont() {
    var content = document.getElementById('content');
    content.style.fontSize = '12px';
}

function originalFontSize() {
    var content = document.getElementById('content');
    content.style.fontSize = '14px';
}
