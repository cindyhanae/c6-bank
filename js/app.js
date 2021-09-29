$('.body').scroll(function(){
    if($(this).scrollTop() > 100){
        $('header').addClass('active_header')
        $('.logo').html(
            '<img src="./assets/logo-black.svg" alt="Logo C6 Bank">'
        )
    } else {
        $('header').removeClass('active_header')
        $('.logo').html(
            '<img src="./assets/logo-white.svg" alt="Logo C6 Bank">'
        )
    }
})

$('.toggle').on('click', () =>{
    $('.toggle')
})