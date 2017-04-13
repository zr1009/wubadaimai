$(function () {
    var aLi = $('.box2 ul li');
    var aImg = $('.box2 div img');
    var timer = null;
    var index = 0;
    aLi.click(function () {
        index = $(this).index();
        aImg.eq(index).fadeIn().siblings().fadeOut();
        $(this).addClass('hover').siblings().removeClass('hover');
    });
    $('.box2').hover(function () {
            clearInterval(timer);
        }, function () {
            timer = setInterval(function () {
                index++;
                if (index == aLi.length) {
                    index = 0;
                }
                aImg.eq(index).fadeIn().siblings().fadeOut();
                aLi.eq(index).addClass('hover').siblings().removeClass('hover');
            }, 2000);
        }
    ).trigger('mouseleave');
})
$(function () {
    var oLi = $('.box ul>li');
    oLi.hover(function () {
        $(this).find('ul').stop().slideToggle();
    })
})

$(document).ready(function () {
    $(".Ltab li").click(function () {
        $(".Ltab li").eq($(this).index()).addClass("Lcur").siblings().removeClass('Lcur');
        $(".Lcen div").hide().eq($(this).index()).show();
        //ÁíÒ»ÖÖ·½·¨: $("div").eq($(".tab li").index(this)).addClass("on").siblings().removeClass('on');

    });
});
$(function () {
    var oImg = $('.cen-b img');
    var oSpan = $('.cen-b span');
    var oDiv = $('.cen-b div');
    oSpan.width(oDiv.width() * 2);
    oDiv.eq(1).html(oDiv.eq(0).html());
    var timer = null;
    $('.cen-b').hover(function () {
        clearInterval(timer)
    }, function () {
        timer = setInterval(function () {
            var ml = parseInt(oSpan.css('margin-left'));
            ml--;
            if (ml == -(oDiv.width())) {
                ml = 0;
            }
            oSpan.css({'margin-left': ml});
        }, 10);
    }).trigger('mouseleave');
})
$(function () {
    $(window).scroll(function () {
        var headH = $('.top').height() + $('.nav').height() + $('#cen').height();
        if ($(document).scrollTop() > headH) {
            $('#cen').slideDown();
        } else {
            $('#cen').slideUp();
        }
    })
    $(window).scroll(function () {
        if ($(document).scrollTop() > $(window).height()) {
            $('.back').slideDown();
        } else {
            $('.back').slideUp();
        }
    })
    $('.back').click(function () {
        $('body,html').animate({'scrollTop': 0}, 1000)
    })
})
$(function () {
    $('.img-2').click(function () {
        $('.center-left ul').stop().animate({'left': -185}, 500,
            function () {
                $('.center-left ul li:first').appendTo('.center-left ul');
                $('.center-left ul').css({'left': 0})
            });

    })
    $('.img-1').click(function () {
        $('.center-left ul li:last').prependTo('.center-left ul');
        $('.center-left ul').css({'left': -185})
        $('.center-left ul').stop().animate({'left': 0});
    })
})
$(function () {
    $.ajax({
        type: "POST",
        url: "js/json.json",
        data: "data",
        dataType: "json",
        success: function (data) {
            $.each(data, function (x, y) {
                str = $('<a>' + y.title + '</a>' + '<span>' + y.date + '</span>' + '</br>');
                $('.cenc-1').append(str)
            })
        }
    })
})
$(function () {
    $('.topright a').click(function () {
        $('.top-1').stop().slideDown();
        $('.x-list').stop().slideup();
    }, function () {
        $('.top-1').stop().slideUp();
        $('.x-list').stop().slideDown();
    })
})
$(function () {
    var aLi = $('.sj li')
    $('.zhuce').hover(function () {
        $('.zhuce ul .zhanghao').stop().slideDown();
        aLi.addClass('hover');
    }, function () {
        $('.zhuce ul .zhanghao').stop().slideUp();
        aLi.removeClass('hover');
    }); 
    $('.tuichu').click(function () {
        $('.top-1').stop().slideUp();
        $('.x-list').stop().slideDown();
    }, function () {
        $('.top-1').stop().slideDown();
        $('.x-list').stop().slideup();
        // $('.zhuce ul .zhanghao').stop().slideUp();
    })




})