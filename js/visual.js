$(function() {
    // Visual - Slide
    let filter = 'win16|win32|win64|mac|macintel';
    if(navigator.platform) {
        // PC환경에서만 오토슬라이드 적용
        if(filter.indexOf(navigator.platform.toLowerCase()) > 0){
            let slidePlay = setInterval(autoSlide,5000);
            $('.control.stop').click(stopSlide)
            $('.control.start').click(startSlide)

            function autoSlide() {
                $('.next').trigger('click');
            }

            function stopSlide() {
                $('.control.stop').fadeOut(300);
                $('.control.start').fadeIn(300);
                clearInterval(slidePlay);
            }
        
            function startSlide() {
                $('.control.stop').fadeIn(300);
                $('.control.start').fadeOut(300);
                setInterval(autoSlide,5000);
            }
        }
    }

    first();
    $('.prev').click(prev)
    $('.next').click(next)
    $('.dots-list').click(dots)
    $('.control.stop').click(stopSlide)
    $('.control.start').click(startSlide)

    function first() {
        slide_Event();
    }

    function slide_Event(){
        let idx = $('.visual-slide.on').index();
        $('.dots-list').eq(idx).addClass('active');
        $('.visual-veil').stop().animate({'width':'44%', 'opacity':'1'},1000);
        $('.txt-wrap').delay(500).animate({'opacity':'1'},1000);
    }

    function prev() {
        let idx = $('.visual-slide.on').index();

        reset();

        if(idx < 3) {
            $('.visual-slide').eq(idx - 1).addClass('on');
        }

        slide_Event();
    }

    function next(e) {
        // 상위에 이벤트를 전파하지 않는속성 (main.on 겹침)
        e.stopPropagation();

        let idx = $('.visual-slide.on').index();

        reset();

        if(idx < 2) {
            $('.visual-slide').eq(idx + 1).addClass('on');
        }

        else if (idx == 2) {
            $('.visual-slide').eq(0).addClass('on');
        }

        slide_Event();
    } 

    function dots() {
        let idx = $(this).index();

        reset();

        $('.visual-slide').eq(idx).addClass('on');

        slide_Event();
    }

    function reset() {
        $('.visual-slide').removeClass('on');
        $('.dots-list').removeClass('active');
        $('.visual-veil').stop().animate({'width':'0', 'opacity':'0'},0);
        $('.txt-wrap').css('opacity','0');
    }
})