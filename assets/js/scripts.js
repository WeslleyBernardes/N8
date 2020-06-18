$(document).ready(function (){
   
    
    $('.navScroll').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
                targetOffset = $(id).offset().top;
                
        $('html, body').animate({ 
            scrollTop: targetOffset - 100
        }, 500);
    });

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