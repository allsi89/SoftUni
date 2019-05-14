function attachEvents() {
    const baseUrl = 'https://fir-18833.firebaseio.com/messages.json'
    $('#submit').on('click', submitMessage);
    $('#refresh').on('click', reloadPage);

    function submitMessage() {
        let author = $('#author').val();
        let content = $('#content').val();
        let timestamp = Date.now();
        
        let message = {
            author,
            content,
            timestamp
        }

        $.ajax({
            url: baseUrl,
            method: 'POST',
            data: JSON.stringify(message),
            success: logResponse
        })
    }

    function logResponse(message) {
        console.log(message);
    }

    function reloadPage() {
        $.ajax({
            url: baseUrl,
            method: 'GET',
            success: loadMessages
        })
    }

    function loadMessages(data) {
        let allMessages = '';

        for (let message of Object.values(data)) {
            allMessages += `${message.author}: ${message.content}\n`;
        }
        
        $('#messages').text(allMessages);
    }
}