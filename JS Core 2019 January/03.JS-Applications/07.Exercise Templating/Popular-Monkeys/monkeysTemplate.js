$(() => {
    loadMonkeys();

    async function loadMonkeys() {
        try {
            let allMonkeysHtml = await $.ajax({
                url: './allmonkeys.html'
            });

            let monkeyHtml = await $.ajax({
                url: './monkey.html'
            });

            let allMonkeysTemplate = Handlebars.compile(allMonkeysHtml);
            let monkeyTemplate = Handlebars.compile(monkeyHtml);
            let context = {monkeys};
            Handlebars.registerPartial('monkey', monkeyTemplate);
            $('div.monkeys').html(allMonkeysTemplate(context));
        } catch (err) {
            console.log(err)
        }
    }
})

function showInfo(id) {
    $(`#${id}`).toggle();
}