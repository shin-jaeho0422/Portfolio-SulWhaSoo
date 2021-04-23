$(function() {
    // Flagship Slide
    $('.flag-next').click(flagNext) 
    $('.flag-prev').click(flagPrev)
    $('.flag-dots-list').click(flagDots)

    function flagNext() {
        let idx = $('.flag-list.on').index();
        
        flagReset();

        if(idx < 3) {
            $('.flag-list').eq(idx + 1).addClass('on');
            $('.flag-dots-list').eq(idx + 1).addClass('act');
        }
        else {
            $('.flag-list').eq(0).addClass('on');
            $('.flag-dots-list').eq(0).addClass('act');
        }
    }

    function flagPrev() {
        let idx = $('.flag-list.on').index();

        flagReset();

        if(idx < 4) {
            $('.flag-list').eq(idx - 1).addClass('on');
            $('.flag-dots-list').eq(idx - 1).addClass('act');
        }
    }

    function flagReset() {
        $('.flag-list').removeClass('on');
        $('.flag-dots-list').removeClass('act');
    }

    function flagDots() {
        let idx = $(this).index();

        flagReset();

        $('.flag-list').eq(idx).addClass('on');
        $('.flag-dots-list').eq(idx).addClass('act');
    }

    function flagAutoPlay() {
        $('.flag-next').trigger('click');
    }
})