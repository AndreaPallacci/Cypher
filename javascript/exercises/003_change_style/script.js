
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

function getColor() {
    color = prompt('Dammi il colore dei carattere?');
    backgroundColor = prompt('Dammi il colore di sfondo?');
    changeStyle(color, backgroundColor);    
}



function carousel(){
    var gallery = document.getElementById('gallery');
    var images = gallery.getElementsByTagName('img');
    var index = 0;
        //faccio partire ogni 3 secondi la funzione changeImgCarousel passandogli quale immagine deve cambiare
    setInterval(function () {
        index = changeImgCarousel(index, images);
    },3000); 
}

function changeImgCarousel(x, imgs) {
    changePhoto(imgs[x].id);
    //aumento il contatore
    x++
    //se sono arrivato alla all'ultima immagine resetto il contatore
    if(x == imgs.length) {
        x = 0;
    }
    return x;
}


//faccio partire la funzione phototime quando tutti gli elementi della pagina sono caricati
window.onload=function () {carousel()}


