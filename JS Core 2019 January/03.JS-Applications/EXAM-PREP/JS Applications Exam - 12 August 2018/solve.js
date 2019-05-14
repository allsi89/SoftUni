function startApp() {
    sessionStorage.clear();
    showHideMenuLinks();
    $(document).on({
        ajaxStart: function() {
            $('#loadingBox').show();
        },
        ajaxStop: function() {
            $('#loadingBox').hide();
        }
    });

    $('infoBox', '#errorBox').on('click', function() {
        $(this).fadeOut();
    });

    function showInfo(message) {
        $('infoBox').show();
        $('infoBox > span').text(message);
        setTimeout(function() {
            $('infoBox').fadeOut();
        }, 3000);
    }

    function showError(error) {
        $('#errorBox').show();
        $('#errorBox > span').text(error);
        $('#errorBox').on('click', function() {
            $(this).fadeOut();
        })
    }

    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if(response.readyState === 0)
            errorMsg = 'Cannot connect due to network error.';
        if(response.responseJSON && response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        showError(errorMsg);    
    }

    const baseUrl = 'https://baas.kinvey.com/';
    const appKey = 'kid_rkMtKform';
    const appSecret = '53badeb768df46aaa0e0782d3c99a442';
    const kinveyAppAuthHeaders = {
        'Authorization': "Basic " + btoa(appKey + ':' + appSecret)
    }

    function getKinveyUserAuthHeaders() {
        return {
            'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')
        }
    }

    $('#registerButton').on('click', showRegisterView);
    $('#registerUser').on('click', registerUser);
    $('#loginButton').on('click', showLoginView);
    $('#logUserBtn').on('click', loginUser);
    $('#myListings').on('click', myListingView);
    $('#logout').on('click', logoutUser);
    $('#signUpBtn').on('click', showRegisterView);
    $('#signInBtn').on('click', showLoginView);
    $('#home').on('click', showHomeMenu);
    $('#allListings').on('click', allListings);
    $('#createListing').on('click', createListingsView);
    $('#createCars').submit(createCar);
    $('#editCars').submit(saveEditedCar);
    $('form').submit(function(event) {
        event.preventDefault();
    })


    function saveAuthInSession(userInfo) {
        sessionStorage.setItem('authToken', userInfo._kmd.authToken);
        sessionStorage.setItem('userId', userInfo._id);
        sessionStorage.setItem('userName', userInfo.username);
    }

    function hideAllViews() {
        $('#main').hide();
        $('#login').hide();
        $('#registerForm').hide();
        $('#createCars').hide();
        $('#car-listings').hide();
        $('#editCars').hide();
        $('#carMyListings').hide();
        $('#listDetails').hide();
        $('#allListings').hide();
        $('#createListings').hide();
        $('#myListings').hide();
        $('#profile').hide();
    }

    function showHideMenuLinks() {
        hideAllViews();

        if(sessionStorage.getItem('authToken') === null) {
            $('#main').show();
        } else {
            $('#main').hide();
            $('#allListings').show();
            $('#myListings').show();
            $('#createListings').show();
            $('#profile').show();
            $('#car-listings').show();
            $('#welcm').text(`Welcome ${sessionStorage.getItem('userName')}`)

        }
    }

    function showHomeMenu() {
        showHideMenuLinks();
    }

    function createListingsView() {
        hideAllViews();
        $('#createCars').show();
    }

    function showRegisterView() {
        hideAllViews();
        $('#registerForm').show();
    }

    function showLoginView() {
        hideAllViews();
    }

    function loginUser() {
        let username = $('#formLogin input[name="username"]').val();
        let password = $('#formLogin input[name="password"]').val();

        let usernameRegex = /[A-Za-z]{3,}/;
        let passRegex = /[A-Za-z0-9]{6,}/;

        if(!usernameRegex.test(username)){
            showError('User name lenght should be at least 3 characters long and contains english letters.')
        } else if(!passRegex.test(password)) {
            showError('A user\`s password should be at least 6 characters long and shouldcontains only english letters.')
        } else {
            $.ajax({
                method: 'POST',
                url: baseUrl + 'user/' + appKey + '/login',
                data: {username, password},
                headers: kinveyAppAuthHeaders
            }).then(function(res) {
                saveAuthInSession(res);
                showHideMenuLinks();
                allListings();
                showInfo('Login sccessfull.');
            }).catch(handleAjaxError);
        }
    }

    function registerUser() {
        let username = $('#registerForm input[name="username"]').val();
        let password = $('#registerForm input[name="password"]').val();
        let repeatPass = $('#registerForm input[name="repeatPass"]').val();

        let usernameRegex = /[A-Za-z]{3,}/;
        let passRegex = /[A-Za-z0-9]{6,}/;

        if(!usernameRegex.test(username)){
            showError('User name lenght should be at least 3 characters long and contains english letters.')
        } else if(!passRegex.test(password)) {
            showError('A user\`s password should be at least 6 characters long and shouldcontains only english letters.')
        } else if(password !== repeatPass){
            showError('The password do not match repeated password!');
        } else {
            $.ajax({
                method: 'POST',
                url: baseUrl + 'user/' + appKey + '/',
                data: {username, password},
                headers: kinveyAppAuthHeaders
            }).then(function(res) {
                saveAuthInSession(res);
                showHideMenuLinks();
                allListings();
                showInfo('User registration sccessfull.');
            }).catch(handleAjaxError);
        }   
    }

    function logoutUser() {
        $.ajax({
            method: 'POST',
            url: baseUrl + 'user/' + appKey + '/_logout',
            headers: getKinveyUserAuthHeaders()
        }).then(function() {
            sessionStorage.clear();
        $('#welcm').text('');
        showHideMenuLinks();
        showInfo('Logout successful.');
        }).catch(handleAjaxError);
        
    }

    function allListings() {
        $.ajax({
            method: 'GET',
            url: baseUrl + 'appdata/' + appKey + '/cars',
            headers: getKinveyUserAuthHeaders()
        }).then(function(res) {
            $('#car-listings').show();
            $('#listings').empty();
            if(res.length === 0) {
                $('#listings').append('<p class="no-cars">No cars in database!</p>')
            } else {
                for (const item of res) {
                    let singleListing = $(`
                    <div class="my-listing">
                    <p id="listing-title">${res.title}}</p>
                    <img src="${res.imageUrl}">

                    <div class="listing-props">
                        <h2>Brand: ${res.brand}</h2>
                        <h3>Model: ${res.model}</h3>
                        <h3>Year: ${res.year}</h3>
                        <h3>Price: ${res.price}</h3>
                    </div>
                    <div class="my-listing-buttons">
                        <a href="#" class="my-button-list">Details</a>
                        <a href="#" class="my-button-list">Edit</a>
                        <a href="#" class="my-button-list">Delete</a>
                    </div>
                </div>
                    `)
                }
            }
        })
    }

    function editCar(car) {

    }

    function saveEditedCar() {

    }

    function detailsCar(car) {

    }

    function deleteCar(car) {

    }

    function createCar() {

    }

    function myListingView() {

    }
}