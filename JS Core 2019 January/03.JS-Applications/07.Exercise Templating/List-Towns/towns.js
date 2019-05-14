function attachEvents() {
    $('#btnLoadTowns').on('click', getTowns);

    function getTowns() {
        let towns = $('#towns').val().split(', ');

        let template = $('#towns-template').html(); // get template
       
        let compiledTemplate = Handlebars.compile(template); // compile template
        
        let context = {towns: towns}; // create context

        $('#root').html(compiledTemplate(context)); // add to html
    }
}