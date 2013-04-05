//Cambia lo stile a rosso
function changeToRed() {
    var body = document.getElementsByTagName('body');
    //varie regole da cambiare
    body[0].style.color = 'red';}


//Cambia lo stile a blue
function changeToBlue() {
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

function changePhoto1() {
    var img = document.getElementById('photo1');
    img.style.width = '300px';
    var img = document.getElementById('photo2');
    img.style.width = '50px';
    var img = document.getElementById('photo3');
    img.style.width = '50px';
}

function changePhoto2() {
    var img = document.getElementById('photo2');
    img.style.width = '300px';
    var img = document.getElementById('photo1');
    img.style.width = '50px';
    var img = document.getElementById('photo3');
    img.style.width = '50px';
}

function changePhoto3() {
    var img = document.getElementById('photo3');
    img.style.width = '300px';
    var img = document.getElementById('photo2');
    img.style.width = '50px';
    var img = document.getElementById('photo1');
    img.style.width = '50px';
}
