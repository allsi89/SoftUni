const eventService = (() => {

    function createBook(data) {
        return kinvey.post('appdata', 'events', 'kinvey', data);
    }

    function showAllEvents() {
        return kinvey.get('appdata', `events`, 'kinvey');
    }

    function getAnEvent(id) {
        return kinvey.get('appdata', `events/${id}`, 'kinvey');
    }

    function editEvent(id, data) {
        return kinvey.update('appdata', `events/${id}`, 'kinvey', data);
    }

    function deleteEvent(id) {
        return kinvey.remove('appdata', `events/${id}`, 'kinvey');
    }

    function getMyBooks(id) {
        return kinvey.get('appdata', `events?query={"_acl.creator":"${id}"}`, 'kinvey');
    }

    function searchBook(book) {
        return kinvey.get('appdata', `events?query={"name":{"$regex":"^${book}"}} `, 'kinvey');
    }

    function getAllBooks(filter) {
        let query = filter 
            ? JSON.stringify({genre: filter})
            : JSON.stringify({});

        return kinvey.get('appdata', `events?query=${query}`, 'kinvey');
    }

    return {
        createBook,
        showAllEvents,
        getAnEvent,
        editEvent,
        deleteEvent,
        getMyBooks,
        getAllBooks,
        searchBook
    }
})();