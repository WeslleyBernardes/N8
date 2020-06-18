$(document).ready(function (){
    colorSanduiche();
});

function colorSanduiche(){
    $('.navbar-toggler').click(function(){
        const svg = $(this).find('#hamburguer');       
        const teste = $(svg).find('style').html();
        if( teste === '.cls-1{fill:#29abe2;}'){
             $(svg).find('style').html('.cls-1{fill:#fff;}');
        } else {
             $(svg).find('style').html('.cls-1{fill:#29abe2;}');
        }
    });
}