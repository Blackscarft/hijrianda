$('.page-scroll').on('click',function(e){
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);
    if(tujuan =='#aboutus'){
        $('.hidecontainer').css({
            'display':'block'
        });
        $('.showcontainer').css({
            'display':'none'
        });
        $('.galericontainer').css({
            'display':'none'
        });
    }else if(tujuan == '#galeri'){
        $('.galericontainer').css({
            'display':'block'
        });
        $('.showcontainer').css({
            'display':'none'
        });
        $('.hidecontainer').css({
            'display':'none'
        });
    }else{
        $('.hidecontainer').css({
            'display':'none'
        });
        $('.showcontainer').css({
            'display':'block'
        });
        $('.galericontainer').css({
            'display':'none'
        });
    }
    $('*').animate({
        scrollTop: elemenTujuan.offset().top
    }, 1000, 'swing');
    e.preventDefault();
});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    console.log(wScroll)
        if(wScroll == 0){
            $('nav').css({
                'background':'transparent'
            });  
             
        }else{
            $('nav').css({
                'background':'white'
            });
        }
        
});
jQuery(document).ready(function(){
    $('.boxtextban').css({
        'opacity':'1'
    });
    $('.geser').css({
        'margin-left':'0%'
    });
});