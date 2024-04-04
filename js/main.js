$(document).ready(function(){
    // alert ('s')
    $('header').mouseenter(function(){
        $('header').stop().animate({
            height: '492px'
        }, 150)
    })
    $('header').mouseleave(function(){
        $('header').stop().animate({
            height: '120px'
        }, 150)
    })
})

$(function(){
    const menugrptitle = $('.menugrplist li')

    menugrptitle.click(function(){
        $('.menuslidewrap').hide()
        let idx = $(this).index()
        $('.menuslidewrap').eq(idx).show()
    })
    menugrptitle.eq(0).trigger('click')
})

$(function(){
    $('.go-top').click(function(e){
        e.preventDefault()
        $('html, body').stop().animate({
            scrollTop : 0
        }, 700)
    })
})