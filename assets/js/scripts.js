$(document).ready(function (){
   
    
    $('.navScroll').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
                targetOffset = $(id).offset().top;
                
        $('html, body').animate({ 
            scrollTop: targetOffset - 100
        }, 500);
    });
    var posicaoInicial = $('#header').position().top;
    $(document).scroll(function () { 
        var posicaoScroll = $(document).scrollTop();
        
        
         if (posicaoScroll > 100 ){

            console.log(posicaoScroll);
            $('.btn-top').addClass('active');
         }else {
            
            $('.btn-top').removeClass('active');
         };
    })

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