
    $(window).scroll(function(){
        var height = $(window).scrollTop()
        if(height>=150){
            $('.header').slideDown(300,'linear')
            
        }else{
            $('.header').slideUp(300,'linear')
            
        }
    })
