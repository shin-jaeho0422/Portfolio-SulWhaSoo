$(function() {
    // Content Tab
    $('.btn-tab').click(contentTab)

    function contentTab() {
        let idx = $(this).index();

        $('.btn-tab').removeClass('on');
        $('.content-list').removeClass('act');
        
        $('.btn-tab').eq(idx).addClass('on');
        $('.content-list').eq(idx).addClass('act');
    }
})