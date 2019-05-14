function attachEvents() {
    console.log($('a').click(addClass));

    function addClass() {
        let currentBtn = $(this);
        
        if (!currentBtn.hasClass('selected')) {
            $('a').removeClass('selected');
            currentBtn.addClass('selected');
        }
    }
}