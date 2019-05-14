function showDetails(id) {
    $(`#${id}`).toggle();   // displays the hidden elements
}

$(async () => {
    try {
        const contactListHTML = await $.get('./contact-list.hbs');
        const contactInfoHTML = await $.get('./contact-info.hbs');

        Handlebars.registerPartial('contactInfo', contactInfoHTML);

        const template = Handlebars.compile(contactListHTML);
        const context = {contacts};
        const renderedHtml = template(context);
        $('body').append(renderedHtml);

    } catch (err) {
        console.log(err);
    }
})