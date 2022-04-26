$(document).ready(function(){
    $('#sns_menu>li:not(#sns_menu>li:last-child)').click(function(){
        $('#sns_box'+($(this).index()+1)).show().siblings().hide();
        $(this).css({'background-color':'#223a6a','color':'#fff'}).addClass('sns_click').siblings().css({'background-color':'#ebeff1','color':'#666'}).removeClass('sns_click')
    })
    $('#sns_menu>li:not(#sns_menu>li:last-child)').mouseenter(function(){
        $(this).css({'background-color':'#223a6a','color':'#fff'}).siblings().not('.sns_click').css({'background-color':'#ebeff1','color':'#666'})
    })
    $('#sns_menu>li:not(#sns_menu>li:last-child)').mouseleave(function(){
        $(this).not('.sns_click').css({'background-color':'#ebeff1','color':'#666'})
    })
    let slide100 = 0;
    $('#slide_leftbtn').click(function(){
        slide100 = slide100 + 100;
        if(slide100>-700){slide100=0}
        $('#slide_imgbox').animate({'left':slide100+'%'})
    })
    $('#event1_btn>li:not(#event1_btn>li:nth-child(5),#event1_btn>li:nth-child(6))').mouseenter(function(){
        $(this).not('.event1_click').css({'background-color':'#fef100'})
    })
    $('#event1_btn>li:not(#event1_btn>li:nth-child(5),#event1_btn>li:nth-child(6))').mouseleave(function(){
        $(this).not('.event1_click').css({'background-color':'#fff'})
    })
    $('#event1_btn>li:not(#event1_btn>li:nth-child(5),#event1_btn>li:nth-child(6))').click(function(){
        $(this).css({'background-color':'#fef100'}).addClass('event1_click')
        $(this).siblings('.event2_btn_a').css({'background-color':'#fff'}).removeClass('event1_click').css({'background-color':'#fff'});
        $('#event1_slide').stop().animate({'left':($(this).index()*-100)+'%'})
    })
    $('#event2_btn>li:not(#event2_btn>li:nth-child(4),#event2_btn>li:nth-child(5))').mouseenter(function(){
        $(this).not('.event2_click').css({'background-color':'#fef100'})
    })
    $('#event2_btn>li:not(#event2_btn>li:nth-child(4),#event2_btn>li:nth-child(5))').mouseleave(function(){
        $(this).not('.event2_click').css({'background-color':'#fff'})
    })
    $('#event2_btn>li:not(#event2_btn>li:nth-child(4),#event2_btn>li:nth-child(5))').click(function(){
        $(this).css({'background-color':'#fef100'}).addClass('event2_click')
        $(this).siblings().not('#event2_btn>li:nth-child(4),#event2_btn>li:nth-child(5)').removeClass('event2_click').css({'background-color':'#fff'});
        $('#event2_slide').stop().animate({'left':($(this).index()*-100)+'%'})
    })
    $('#slide_btn>li').click(function(){
        $('#slide_imgbox').animate({'left':$(this).index()*-100+'%'})
        $(this).css({'background-color':'#fef100'}).siblings().css({'background-color':'#fff'})
    })
    $('#up_btn').click(function(){
        $('html, body').stop().animate({'scrollTop':'0'},500)
    })
    let num = 0;
    setInterval(function(){
        num = num - 100;
        if(num < -700){num = 0;}
        $('#slide_imgbox').stop().animate({'left':num+'%'})
        $('#slide_btn>li:nth-child('+((num*-0.01)+1)+')').stop().css({'background-color':'#fef100'}).siblings().css({'background-color':'#fff'})
    },3000)
    $('#slide_leftbtn').click(function(){
        num = num + 100;
        if(num > 0){num = -700}
        $('#slide_imgbox').stop().animate({'left':num+'%'})
        $('#slide_btn>li:nth-child('+((num*-0.01)+1)+')').stop().css({'background-color':'#fef100'}).siblings().css({'background-color':'#fff'})
    })
    $('#slide_rightbtn').click(function(){
        num = num - 100;
        if(num < -700){num = 0}
        $('#slide_imgbox').stop().animate({'left':num+'%'})
        $('#slide_btn>li:nth-child('+((num*-0.01)+1)+')').stop().css({'background-color':'#fef100'}).siblings().css({'background-color':'#fff'})
    })
})