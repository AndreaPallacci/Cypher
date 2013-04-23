//Cambia lo stile della pagina
function changeStyle(class_css) {
   $('body').attr('class',class_css);
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


//registro gli eventi al caricamento della pagina
$(document).ready(function(){

    $('#navigation .first li a').click(function () {
        class_css = $(this).text();
        changeStyle(class_css);
    });

    $('#navigation .second li a').click(function () {
        size_px = $(this).attr('title');
        changeFont(size_px);
    });
    

    $('#navigation .p').click(function () {
        size_px = $('#content').css('font-size');
        size_px = parseInt(size_px);
        size_px = size_px + 2;
        changeFont(size_px + 'px');
    });

    $('#navigation .m').click(function () {
        size_px = $('#content').css('font-size');
        size_px = parseInt(size_px);
        size_px = size_px - 2;
        changeFont(size_px + 'px');
    });
});
