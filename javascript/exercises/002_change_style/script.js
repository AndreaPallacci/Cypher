
//Cambia lo stile della pagina
function changeStyle(color, background) {
    var body = document.getElementsByTagName('body');
    //varie regole da cambiare
    body[0].style.color = color;
    body[0].style.backgroundColor = background;
}


function changeFont(size) {
    var content = document.getElementById('content');
    content.style.fontSize = size;
}


//Cambia immagini
var img_max_width = '400px';
var img_min_width = '50px';

function changePhoto(photo) {
    var gallery = document.getElementById('gallery');
    var images = gallery.getElementsByTagName('img');
    for(var i=0; i< images.length; i++) {
        if(images[i].id == photo) {
            images[i].style.width = img_max_width;
        } else {
            images[i].style.width = img_min_width;
        }
    }
}


