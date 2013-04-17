
//Cambia lo stile della pagina
function changeStyle(color, background) {
   body = $('body');
   body.css('color', color);
   body.css('background-color', background);
}


function changeFont(size) {
    content = $('#content');
    content.css('font-size',size);
}


//Cambia immagini
var img_max_width = '400px';
var img_min_width = '50px';

function changePhoto(photo) {
    //seleziono le immagini dentro il div di id gallery
    imgs = $('#gallery img');
    //faccio un ciclo per fare su ognuna l'operazione di modifica delle dimensioni
    imgs.each(
        function () { 
            id = $(this).attr('id');
            if(id == photo) {
                $(this).css('width',img_max_width);
            } else {
                $(this).css('width',img_min_width);
            }
        }
    );
}

