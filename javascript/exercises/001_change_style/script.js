
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

//Cambia immagini
var img_max_width = '400px';
var img_min_width = '50px';

function changePhoto1() {
    var img = document.getElementById('photo1');
    if (img.style.width == img_max_width) {
        img.style.width = img_min_width;
    } else {
        img.style.width = img_max_width;
        var img = document.getElementById('photo2');
        img.style.width = img_min_width;
        var img = document.getElementById('photo3');
        img.style.width = img_min_width;
    }
}

function changePhoto2() {
    var img = document.getElementById('photo2');
    if (img.style.width == img_max_width) {
        img.style.width = img_min_width;
    } else {
        img.style.width = img_max_width;
        var img = document.getElementById('photo1');
        img.style.width = img_min_width;
        var img = document.getElementById('photo3');
        img.style.width = img_min_width;
    }
}

function changePhoto3() {
    var img = document.getElementById('photo3');
    if (img.style.width == img_max_width) {
        img.style.width = img_min_width;
    } else {
        img.style.width = img_max_width;
        var img = document.getElementById('photo2');
        img.style.width = img_min_width;
        var img = document.getElementById('photo1');
        img.style.width = img_min_width;
    }
}


function addBorder1() {
    var image = document.getElementById('photo1');
    image.style.border = '2px solid green';
    var image = document.getElementById('photo2');
    image.style.border = '';
    var image = document.getElementById('photo3');
    image.style.border = '';
}

function addBorder2() {
    var image = document.getElementById('photo2');
    image.style.border = '2px solid green';
    var image = document.getElementById('photo1');
    image.style.border = '';
    var image = document.getElementById('photo3');
    image.style.border = '';
}

function addBorder3() {
    var image = document.getElementById('photo3');
    image.style.border = '2px solid green';
    var image = document.getElementById('photo1');
    image.style.border = '';
    var image = document.getElementById('photo2');
    image.style.border = '';
}
