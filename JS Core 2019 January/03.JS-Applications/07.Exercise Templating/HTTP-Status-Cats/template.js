$(() => {
    renderCatTemplate();

    async function renderCatTemplate() {

        try {
            let catsTemplate = await $.ajax({
                url: './catsTemplate.html'
            });
    
            let compiledTemplate = Handlebars.compile(catsTemplate);
            let context = {
                cats: window.cats
            };
    
            $('#allCats').html(compiledTemplate(context));
        } catch (err) {
            console.log(err)
        }
    }
})

function showInfo(id) {
    $(`#${id}`).toggle();
}
