function countriesAndTowns() {

    const baseUrl = 'https://baas.kinvey.com/';
    const appKey = 'kid_B14Gi9kt4';
    const collection = 'countriesAndTowns';
    const username = 'guest';
    const password = 'guest';
    const headers = {
        'Authorization': `Basic ${btoa(username + ':' + password)}`,
        'Content-Type': 'application/json'
    };


    $('#showCountriesButton').on('click', showCountries);
    $('#addCountry').on('click', addCountry);
    let spinner = $('#spinner');

    function isEmpty(input, command) {
        if (input.val() === '') {
            input.attr('placeholder', '  Required field * Cannot be empty');
            spinner.hide();
            setTimeout(() => input.attr('placeholder', `${command}`), 3000);
            return true;
        }
    }

    // - - - Countries CRUD

    async function showCountries() {
        spinner.show();
        try {
            let countriesList = await $.ajax({
                headers,
                url: baseUrl + 'appdata/' + appKey + '/' + collection,
                method: 'GET'
            });

            let mainSpan = $('span.main');
            mainSpan.empty();
            countriesList.forEach((countryObj) => {
                let id = countryObj._id;
                let countrySpan = $(`<span data-id="${id}">`);
                let countryBtn = $(`<p class="country">${countryObj.Country}</p>`);
                let input = $('<input id="edit" type="text" placeholder="Edit country">');
                let editBtn = $(`<button class="options">Edit</button>`);
                editBtn.on('click', editCountry);
                let deleteBtn = $(`<button class="options">Delete</button>`);
                deleteBtn.on('click', deleteCountry);
                let showTownsBtn = $(`<button id="show-towns" class="options">Towns</button>`);
                showTownsBtn.on('click', showTowns);
                let list = $(`<p class="list"></p>`);
                let line = $('<hr>');

                countrySpan.append(countryBtn, input, editBtn, deleteBtn, showTownsBtn, list, line);
                mainSpan.append(countrySpan)

            });

        } catch (err) {
            console.log(err);
        }
        spinner.hide();
    }

    async function addCountry() {

        let input = $('#country');
        let newCountry = {Country: input.val()};

        if (isEmpty(input, 'Enter country')) {
            return;
        }

        spinner.show();

        try {
            let countriesList = await $.ajax({
                headers,
                url: baseUrl + 'appdata/' + appKey + '/' + collection,
                method: 'POST',
                data: JSON.stringify(newCountry)
            });
            input.val('');
        } catch (err) {
            console.log(err);
        }
        showCountries();
    }

    async function deleteCountry() {
        spinner.show();
        let id = $(this).parent().data('id');

        try {
            await $.ajax({
                headers,
                url: baseUrl + 'appdata/' + appKey + '/' + collection + '/' + id,
                method: 'DELETE',
            });

            showCountries();

        } catch (err) {
            console.log(err);
            spinner.hide();
        }
    }

    async function editCountry() {

        let id = $(this).parent().data('id');
        let input = $(this).parent().children('#edit');

        if (isEmpty(input, 'Edit country')) {
            return;
        }
        spinner.show();
        let countryInfo = {};

        try {
            countryInfo = await $.ajax({
                headers,
                url: baseUrl + 'appdata/' + appKey + '/' + collection + '/' + id,
                method: 'GET',
            });
        } catch (err) {
            console.log(err);
        }

        let newCountry = {
            Country: input.val(),
            Towns: countryInfo.Towns
        };

        console.log(newCountry);

        try {
            let countriesList = await $.ajax({
                headers,
                url: baseUrl + 'appdata/' + appKey + '/' + collection + '/' + id,
                method: 'PUT',
                data: JSON.stringify(newCountry)
            });
            showCountries();
        } catch (err) {
            console.log(err);
        }
    }

    // - - - Towns CRUD

    async function showTowns() {
        spinner.show();
        let counter = 0;
        let id = $(this).parent().data('id');
        try {
            let list = $(this).parent().children('.list').show();
            list.empty();
            let countryInfo = await $.ajax({
                headers,
                url: baseUrl + 'appdata/' + appKey + '/' + collection + '/' + id,
                method: 'GET'
            });

            let townsArr = countryInfo.Towns;

            function addTownButtons(text) {
                counter++;
                let div = $(`<div class="towns" data-id="${id}"></div>`);
                let add = $('<button id="add" class="towns">add</button>');
                add.on('click', addTown);
                let edit = $('<button id="edit" class="towns">edit</button>');
                edit.on('click', editTown);
                let del = $('<button id="del" class="towns">delete</button>');
                del.on('click', deleteTown);

                if (text !== 'Add new town') {
                    let input = $('<input id="inputTown" type="text" placeholder="Edit name">');
                    let li = $(`<li class="town-name">${text}</li>`);
                    div.append(li, input, edit, del);
                } else {
                    let input = $('<input id="inputTown" type="text" placeholder="Add name">');
                    let lh = $(`<lh class="town-name">${text}</lh>`);
                    div.append(lh, input, add);
                }


                div.appendTo(list);
                spinner.hide();
            }

            addTownButtons('Add new town');

            if (townsArr) {
                townsArr.forEach((town) => {
                    addTownButtons(town);
                })
            }


        } catch (err) {
            console.log(err);
        }
        spinner.hide()
    }

    async function addTown() {

        let id = $(this).parent().parent().parent().data('id');
        let input = $(this).parent().children('#inputTown');

        if (isEmpty(input, 'Add town')) {
            return;
        }

        spinner.show();

        try {

            let countryInfo = await $.ajax({
                headers,
                url: baseUrl + 'appdata/' + appKey + '/' + collection + '/' + id,
                method: 'GET',
            });

            let town = $(this).parent().children('#inputTown').val();

            let updatedTowns = countryInfo.Towns;

            if (updatedTowns) {
                updatedTowns.push(input.val());
            } else {
                updatedTowns = [`${town}`]
            }

            let newTown = {
                Country: countryInfo.Country,
                Towns: updatedTowns,
            };

            await $.ajax({
                headers,
                url: baseUrl + 'appdata/' + appKey + '/' + collection + '/' + id,
                method: 'PUT',
                data: JSON.stringify(newTown)
            });

            $(this).parent().parent().parent().children('#show-towns').click();

        } catch (err) {
            console.log(err);
            spinner.hide();
        }
    }

    async function editTown() {
        spinner.show();
        let id = $(this).parent().parent().parent().data('id');

        let updatedTown = $(this).parent().children('#inputTown');

        if (isEmpty(updatedTown, 'Edit town')) {
            return;
        }

        try {

            let countryInfo = await $.ajax({
                headers,
                url: baseUrl + 'appdata/' + appKey + '/' + collection + '/' + id,
                method: 'GET',
            });

            let town = $(this).parent().children('.town-name').text();
            let indexOfTown = countryInfo.Towns.indexOf(town);
            updatedTown = updatedTown.val();
            let updatedTowns = countryInfo.Towns.splice(indexOfTown, 0, updatedTown);
            updatedTowns = countryInfo.Towns.filter((x) => x !== town);

            let newTown = {
                Country: countryInfo.Country,
                Towns: updatedTowns,
            };

            await $.ajax({
                headers,
                url: baseUrl + 'appdata/' + appKey + '/' + collection + '/' + id,
                method: 'PUT',
                data: JSON.stringify(newTown)
            });

            $(this).parent().parent().parent().children('#show-towns').click();

        } catch (err) {
            console.log(err);
            spinner.hide();
        }
    }

    async function deleteTown() {
        spinner.show();
        let id = $(this).parent().parent().parent().data('id');

        try {

            let countryInfo = await $.ajax({
                headers,
                url: baseUrl + 'appdata/' + appKey + '/' + collection + '/' + id,
                method: 'GET',
            });

            let town = $(this).parent().children('.town-name').text();
            let updatedTowns = countryInfo.Towns.filter((x) => x !== town);

            let newTown = {
                Country: countryInfo.Country,
                Towns: updatedTowns,
            };

            await $.ajax({
                headers,
                url: baseUrl + 'appdata/' + appKey + '/' + collection + '/' + id,
                method: 'PUT',
                data: JSON.stringify(newTown)
            });

            $(this).parent().parent().parent().children('#show-towns').click();

        } catch (err) {
            console.log(err);
            spinner.hide();
        }
    }
}