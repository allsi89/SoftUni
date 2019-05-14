function realEstateAgency() {
    $('button[name="regOffer"]').on('click', regOffer);
    $('button[name="findOffer"]').on('click', findOffer);
    let $message = $('#message');
    let $building = $('#building');

    function regOffer() {

        let $rent = $('input[name="apartmentRent"]');
        let $apartment = $('input[name="apartmentType"]');
        let $commission = $('input[name="agencyCommission"]');

        let isNumbers = +$rent.val() && +$commission.val();
        let isNotEmpty = ($apartment.val() !== '') && ($apartment.val().indexOf(':') === -1);
        let isValidCommission = (+$commission.val() >= 0) && (+$commission.val() <= 100);

        if (isNumbers && isNotEmpty && isValidCommission) {
            let div = createHtmlElement('div', '', 'apartment');
            let rent = createHtmlElement('p', `Rent: ${$rent.val()}`);
            let type = createHtmlElement('p', `Type: ${$apartment.val()}`);
            let commission = createHtmlElement('p', `Commission: ${$commission.val()}`);

            div.append(rent).append(type).append(commission);
            $building.append(div);

            $message.text('Your offer was created successfully.');

        } else {
            $message.text('Your offer registration went wrong, try again.');
        }

        $rent.val('');
        $apartment.val('');
        $commission.val('');
    }

    function findOffer() {
        let $familyBudget = $('input[name="familyBudget"]');
        let $apartmentType = $('input[name="familyApartmentType"]');
        let $familyName = $('input[name="familyName"]');

        let budget = +$familyBudget.val();
        let validBudget = !isNaN(budget) && budget > 0;
        let isNotEmpty = $apartmentType.val() && $familyName.val();

        if (validBudget && isNotEmpty) {
            let $agencyProfit = $('#roof h1');
            let isHomeLess = true;

            for (let apartment of Array.from($('.apartment'))) {

                let $type = $(apartment).children().eq(1);  // element
                let type = $type.text().split(': ')[1];     // value

                if ($apartmentType.val() === type) {
                    let $rent = $(apartment).children().eq(0); // element
                    let rent = $rent.text().split(': ')[1];    // value

                    let $commission = $(apartment).children().eq(2);     // element
                    let commission = $commission.text().split(': ')[1];  // value

                    let neededMoney = +rent + (+rent * +commission) / 100;

                    if ($familyBudget.val() >= neededMoney) {
                        $rent.text(`${$familyName.val()}`);
                        $type.text('live here now');
                        $commission.remove();

                        let $button = createHtmlElement('button', 'MoveOut');
                        $button.on('click', function () {
                            $(apartment).remove();
                            $message.text(`They had found cockroaches in ${$familyName.val()}\'s apartment`);
                        });

                        $(apartment).append($button);
                        $(apartment).css('border', '2px solid red');

                        $message.text('Enjoy your new home :))');
                        isHomeLess = false;

                        let currentAgencyCommission = +$agencyProfit.text().split(' ')[2];
                        let totalCommission = (+rent * +commission) / 100;
                        let updatedAgencyCom = currentAgencyCommission + (totalCommission * 2);
                        $agencyProfit.text(`Agency profit: ${updatedAgencyCom} lv.`);
                    }

                    if (!isHomeLess) {
                        break;
                    }
                }
            }

            if (isHomeLess) {
                $message.text('We were unable to find you a home, so sorry :(');
            }
        } else {
            $message.text('We were unable to find you a home, so sorry :(');
        }
    }

    function createHtmlElement(type, text, className) {
        let element = $(`<${type}></${type}>`);
        if (text) {
            element.text(text);
        }
        if (className) {
            element.addClass(className);
        }
        return element;
    }
}