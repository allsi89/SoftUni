function search() {
   let searched = $('#searchText').val();

    $(`#towns li`)
        .css('font-weight', 'normal');

   let towns = $(`#towns li:contains(${searched})`)
       .css('font-weight', 'bold');

   let count = towns.length;

   $('#result').text(`${count} matches found.`)
}