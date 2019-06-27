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
    if(tujuan == '#galeri'){
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