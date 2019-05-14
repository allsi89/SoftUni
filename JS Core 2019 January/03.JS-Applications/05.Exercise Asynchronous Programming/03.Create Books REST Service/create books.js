function attachEvents() {
    const baseUrl = 'https://baas.kinvey.com/';
    const appKey = 'kid_r1fl9W6O4';
    const user = 'pesho';
    const password = '123456';

    const headers = {
        'Authorization': `Basic ${btoa(user + ':' + password)}`,
        'Content-Type': 'application/json'
    };

    $('.load').on('click', loadBooks);
    $('.add').on('click', addBook);

    async function loadBooks() {
        try {

            let books = await $.ajax({
                url: baseUrl + 'appdata/' + appKey + '/' + 'books',
                method: 'GET',
                headers
            })

            $('#books').empty();

            for (let book of books) {
                let $div = $(`
                  <div class="book" data-id="${book._id}">
                    <label>Title</label>
                    <input type="text" class="title" value="${book.title}" />
                    <label>Author</label>
                    <input type="text" class="author" value="${book.author}"/>
                    <label>Isbn</label>
                    <input type="text" class="Isbn" value="${book.isbn}"/>
                    <label>Location</label>
                  </div>
                `)

                let $updateButton = $(`<button class="update">Update</button>`);
                $updateButton.on('click', updateBook);

                let $deleteButton = $('<button class="delete">Delete</button>');
                $deleteButton.on('click', deleteBook);

                $div.append($updateButton);
                $div.append($deleteButton);
                $('#books').append($div)
            }

        } catch (err) {
            console.log(err)
        }
    }

    async function addBook() {
        try {
            let title = $('#addForm input.title').val();
            let author = $('#addForm input.author').val();
            let isbn = $('#addForm input.Isbn').val();

            let bookObj = {
                title,
                author,
                isbn
            }

            await $.ajax({
                url: baseUrl + 'appdata/' + appKey + '/' + 'books',
                method: 'POST',
                headers,
                data: JSON.stringify(bookObj)
            });

            loadBooks();
            $('#addForm input.title').val('');
            $('#addForm input.author').val('');
            $('#addForm input.Isbn').val('');

        } catch (error) {
            console.log(error);
        }

    }

    async function updateBook() {

        let title = $(this).parent().find('input.title').val();
        let author = $(this).parent().find('input.author').val();
        let isbn = $(this).parent().find('input.Isbn').val();

        let updatedBook = {
            title,
            author,
            isbn
        }

        let id = $(this).parent().data('id');

        try {
            await $.ajax({
                url: baseUrl + 'appdata/' + appKey + '/' + 'books' + '/' + id,
                id,
                method: 'PUT',
                headers,
                data: JSON.stringify(updatedBook)
            });

            loadBooks();

        } catch (err) {
            console.log(err)
        }
    }

    async function deleteBook() {
        let id = $(this).parent().data('id');

        try {
            await $.ajax({
                url: baseUrl + 'appdata/' + appKey + '/' + 'books' + '/' + id,
                id,
                method: 'DELETE',
                headers
            })

            loadBooks();

        } catch (err) {
            console.log(err);
        }
    }
}