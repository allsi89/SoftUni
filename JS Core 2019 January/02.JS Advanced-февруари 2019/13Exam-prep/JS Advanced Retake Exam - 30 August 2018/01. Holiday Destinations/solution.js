function addDestination() {
    let inputData = document.getElementsByClassName('inputData');
    let city = inputData[0].value;
    let country = inputData[1].value;
    let $season = $('#seasons').val();
    let $table = $('#destinations');

    let isEmpty = city === '' || country === '';

    if (!isEmpty) {
        let $tr = $('<tr>');
        let $destinationTd = $('<td>');
        $destinationTd.text(`${city}, ${country}`);
        let $seasonTd = $('<td>');
        $seasonTd.text($season[0].toUpperCase() + $season.slice(1));
        $tr.append($destinationTd).append($seasonTd);
        $table.append($tr);

        // summary box
        let $summer = +$('#summer').val();
        let $autumn = +$('#autumn').val();
        let $winter = +$('#winter').val();
        let $spring = +$('#spring').val();

        if ($season === 'summer') {
            $('#summer').val($summer + 1);
        } else if ($season == 'autumn') {
            $('#autumn').val($autumn + 1);
        } else if ($season == 'winter') {
            $('#winter').val($winter + 1);
        } else if ($season == 'spring') {
            $('#spring').val($spring + 1);
        }

        $('.inputData').val('');
    }
}