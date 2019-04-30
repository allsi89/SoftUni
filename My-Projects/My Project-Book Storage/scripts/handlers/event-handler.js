handlers.getCreateBook = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        })
        .then(function () {
            this.partial('./templates/events/addBook.hbs');
        })
        .catch(function (err) {
            notifications.handleError(err);
        });
};

handlers.createBook = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let data = {
        ...ctx.params,
        likes: 0,
        organizer: ctx.username
    };


    eventService.createBook(data)
        .then(function () {

            notifications.showInfo('Book added successfully.');

            ctx.redirect('#/library');
        })
        .catch(function (error) {
            notifications.handleError(error);
        })
};

handlers.showMoreInfo = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let id = ctx.params.id;

    eventService.getAnEvent(id)
        .then(function (res) {

            ctx.name = res.name;
            ctx.description = res.description;
            ctx.imageURL = res.imageURL;
            ctx.likes = res.likes;
            ctx.creator = res.organizer;
            ctx.genre = res.genre;

            ctx.isCreator = res.organizer === ctx.username;
            ctx._id = res._id;

            ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs'
                })
                .then(function () {
                    this.partial('./templates/events/bookDetails.hbs');
                })
                .catch(function (err) {
                    notifications.handleError(err);
                });

        })
        .catch(function (error) {
            notifications.handleError(error);
        })
};

handlers.getEdit = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let id = ctx.params.id;

    eventService.getAnEvent(id)
        .then(function (res) {

            ctx.name = res.name;
            ctx.dateTime = res.dateTime;
            ctx.description = res.description;
            ctx.imageURL = res.imageURL;
            ctx.likes = res.likes;
            ctx.organizer = res.organizer;

            ctx.isCreator = res.organizer === ctx.username;
            ctx._id = res._id;

            ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs'
                })
                .then(function () {
                    this.partial('./templates/events/editBook.hbs');
                })
                .catch(function (err) {
                    notifications.handleError(err);
                });

        })
        .catch(function (error) {
            notifications.handleError(error);
        })
};

handlers.editEvent = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let id = ctx.params.id;

    let data = {
        ...ctx.params
    };
    delete data.id;


    eventService.editEvent(id, data)
        .then(function () {
            notifications.showInfo('Book edited successfully.');

            ctx.redirect('#/myBooks');
        })
        .catch(function (error) {
            notifications.handleError(error);
        })

};

handlers.closeEvent = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let id = ctx.params.id;

    eventService.deleteEvent(id)
        .then(function () {

            notifications.showInfo('Book deleted successfully.');
            ctx.redirect('#/myBooks');
        })
        .catch(function (error) {
            notifications.handleError(error);
        })
};

handlers.joinEvent = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let id = ctx.params.id;

    eventService.getAnEvent(id)
        .then(function (res) {

            let event = res;

            event.likes = Number(res.likes) + 1;

            eventService.editEvent(id, event)
                .then(function () {
                    notifications.showInfo('You join the event successfully.');

                    ctx.redirect('#/library');
                })
                .catch(function (error) {
                    notifications.handleError(error);
                })
        })
        .catch(function (error) {
            notifications.handleError(error);
        })
};

handlers.getProfile = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    ctx.profilePic = sessionStorage.getItem('profilePic');
    

    let userId = sessionStorage.getItem('id');

    eventService.getMyBooks(userId)
        .then(function (res) {

            ctx.countOfBooks = res.countOfBooks;           
            ctx.books = res;
            ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs'
                })
                .then(function () {
                    this.partial('templates/userProfile.hbs');
                })
                .catch(function (err) {
                    notifications.handleError(err);
                });
        })
        .catch(function (error) {
            notifications.handleError(error);

        });
};

handlers.getMyBooks = function(ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let userId = sessionStorage.getItem('id');


    eventService.getMyBooks(userId)
        .then(function (res) {

            ctx.books = res;
            ctx.countOfBooks = res.countOfBooks;

            ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs'
                })
                .then(function () {

                    this.partial('templates/events/myBooks.hbs')

                })
                .catch(function (error) {
                    notifications.handleError(error);
                })
        })
}

handlers.getAllBooks = function(ctx){
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    if (ctx.isAuth) {
        eventService.showAllEvents()
            .then(function (res) {

                ctx.events = res;

                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs'
                })
                    .then(function () {
                        this.partial('./templates/events/library.hbs');
                    })
                    .catch(function (err) {
                        notifications.showError(err);
                    });
            })
            .catch(function (error) {
                notifications.handleError(error);
            });
    } else {
        ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        })
            .then(function () {
                this.partial('./templates/home.hbs');
            })
            .catch(function (err) {
                notifications.showError(err);
            });
    }
}

handlers.getGenre = function(ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let filter = ctx.params.genre.slice(1);

    eventService.getAllBooks(filter)
        .then(function (res) {
            let events = res;
            ctx.events = events;

            ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs'
                })
                .then(function () {

                    this.partial('./templates/events/library.hbs')

                })
                .catch(function (error) {
                    notifications.handleError(error);
                })
        })
}