$(function() {
    // Header - Language List
    $('.t_lang').click(function() {
        $('.language-list').slideToggle();
        $('.icon-angle-up').toggleClass('active');
        $('.icon-angle-down').toggleClass('active');
    })

    // Header - Search
    $('.search').click(function() {
        $('.search-container').addClass('active');
        $('#main').addClass('on');
        $(this).css('opacity','0');
    })

    $('.search-close').click(function() {
        $('.search-container').removeClass('active');
        $('#main').removeClass('on');
        $('.search').css('opacity','1');
    })

    $('#main').click(function() {
        $('.search-container').removeClass('active');
        $(this).removeClass('on')
        $('.search').css('opacity','1');
    })

    // Header - Gnb
    $('.menu-over').mouseenter(function() {
        let idx = $(this).index();
        $('.sub-list').removeClass('over');
        $('.sub-menu').addClass('active');
        $('.sub-list').eq(idx).addClass('over');
        $('.gnb').addClass('active');
    })
    $('.menu-list').eq(0).mouseenter(function() {
        $('.sub-menu').removeClass('active');
    }) 

    $('.sub-menu').mouseleave(function() {
        $(this).removeClass('active');
        $('.gnb').removeClass('active');
    })

    // Mobile Header
    $('.nav-btn').click(function() {
        $('.m-nav').addClass('active');
        $('.nav-bg').addClass('on');
    })

    $('.nav-bg').click(function() {
        $('.m-nav').removeClass('active');
        $(this).removeClass('on');

        $('.m-nav-list-title').removeClass('on');

        $('.list-item').stop().slideUp();
    })

    $('.m-nav-list-title').click(nav_List)

    function nav_List() {
        let str = $(this).attr('class');
        let idx = $('.m-nav-list-title.on');
        
        // 타이틀 클릭 시 클래스 값에 on이 붙지 않은 타이틀 동작
        if(str!='m-nav-list-title on') {
            $(this).addClass('on');
            $(this).siblings('.list-item').stop().slideDown();
        }

        // 클래스 값에 on이 붙은 타이틀 동작
        idx.siblings('.list-item').stop().slideUp();
        idx.removeClass('on');
    }
})