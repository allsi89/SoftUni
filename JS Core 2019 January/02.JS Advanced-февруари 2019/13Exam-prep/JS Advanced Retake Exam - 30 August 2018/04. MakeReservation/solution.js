function makeReservation(element) {
    let $submitBtn = $('#submit');
    let $editButton = $('#edit');
    let $continueButton = $('#continue');
    $submitBtn.on('click', listInputInfo);

    let personalInfoArr;

    let $fullName = $('#fullName');
    let $email = $('#email');
    let $phoneNumber = $('#phoneNumber');
    let $address = $('#address');
    let $postCode = $('#postalCode');

    function listInputInfo() {

        let isEmpty = $fullName.val() === '' || $email.val() === '';

        if (!isEmpty) {
            personalInfoArr = [
                $fullName.val(),
                $email.val(),
                $phoneNumber.val(),
                $address.val(),
                $postCode.val()
            ];

            $submitBtn.attr('disabled', true);
            $editButton.removeAttr('disabled');
            $continueButton.removeAttr('disabled');

            let $previewInfoUl = $('#infoPreview');
            let $firstListItem = $('<li>');
            $firstListItem.text(`Name: ${$fullName.val()}`);
            let $secondListItem = $('<li>');
            $secondListItem.text(`E-mail: ${$email.val()}`);
            let $thirdListItem = $('<li>');
            $thirdListItem.text(`Phone: ${$phoneNumber.val()}`);
            let $fourthListItem = $('<li>');
            $fourthListItem.text(`Address: ${$address.val()}`);
            let $fifthListItem = $('<li>');
            $fifthListItem.text(`Postal Code: ${$postCode.val()}`);

            $previewInfoUl.append($firstListItem);
            $previewInfoUl.append($secondListItem);
            $previewInfoUl.append($thirdListItem);
            $previewInfoUl.append($fourthListItem);
            $previewInfoUl.append($fifthListItem);

            $fullName.val('');
            $email.val('');
            $phoneNumber.val('');
            $address.val('');
            $postCode.val('');

            $editButton.on('click', editInputData);

        }

        function editInputData() {
            $submitBtn.removeAttr('disabled');
            $editButton.attr('disabled', true);
            $continueButton.attr('disabled', true);

            $fullName.val(personalInfoArr[0]);
            $email.val(personalInfoArr[1]);
            $phoneNumber.val(personalInfoArr[2]);
            $address.val(personalInfoArr[3]);
            $postCode.val(personalInfoArr[4]);
        }
    }

    $continueButton.on('click', function () {
        $submitBtn.attr('disabled', true);
        $editButton.attr('disabled', true);
        $continueButton.attr('disabled', true);

        let container = $(element);
        let h2 = $('<h2>Payment details</h2>');
        let selectMenu = $('<select id="paymentOptions" class="custom-select"></select>');
        let firstOption = $('<option selected disabled hidden>Choose</option>');
        let secondOption = $('<option value="creditCard">Credit Card</option>');
        let thirdOption = $('<option value="bankTransfer">Bank Transfer</option>');

        selectMenu.append(firstOption)
            .append(secondOption)
            .append(thirdOption);

        let extraDetails = $('<div id="extraDetails"></div>');
        let inputLabel = $('<div class="inputLabel">Card Number<input></div>');
        let expirationDate = $('<div class="inputLabel">Expiration Date<input></div>');
        let securityNums = $('<div class="inputLabel">Security Numbers<input></div>');

        extraDetails.append(inputLabel)
            .append($('<br>'))
            .append(expirationDate)
            .append($('<br>'))
            .append(securityNums)
            .append($('<br>'))
            .append($('<button id="checkOut">Check Out</button>'));

        container.append(h2)
            .append(selectMenu)
            .append(extraDetails);
    })
}