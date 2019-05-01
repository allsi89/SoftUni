function solve(input) {
    input = input[0].split(', ');
    let games = {};
    let gamesDlc = [];
    let gameWithoutDlc = [];


    for (let row of input) {
        if (row.includes('-')) {
            let [game, price] = row.split('-');
            price = +price;
            if (!games.hasOwnProperty(game)) {
                games[game] = {
                    price: price
                }

            }

        } else if (row.includes(':')) {
            let [game, dlc] = row.split(':');

            if (games.hasOwnProperty(game)) {
                games[game].dlc = dlc;
                games[game].price *= 1.20;
            }
        }
    }

    games = Object.entries(games);

    for (let g of games) {

        if (g[1].hasOwnProperty('dlc')) {
            gamesDlc.push(g);
        } else {
            gameWithoutDlc.push(g);
        }
    }

    let sortedDlc = gamesDlc.sort((a, b) => {
        return a[1].price - b[1].price;
    });

    for (let d of sortedDlc) {
        let name = d[0];

        console.log(`${name} - ${d[1].dlc} - ${(d[1].price * 0.50).toFixed(2)}`);
    }

    let sortedGamesNodlc = gameWithoutDlc.sort((a, b) => {
        return b[1].price - a[1].price;
    });

    for (let g of sortedGamesNodlc) {
        let name = g[0];
        console.log(`${name} - ${(g[1].price * 0.8).toFixed(2)}`);
    }

}

solve(
    ['WitHer 3-50, FullLife 3-60, WitHer 3:Blood and Beer, Cyberfunk 2077-120, League of Leg Ends-10, League of Leg Ends:DoaT']
);

//function solve (input) {
//   input = input[0].split(', ');
//   let gamePrice = {};
//   let gameDLC = {};
//
//   for (const line of input) {
//     if (line.includes('-')) {
//       let [ game, price ] = line.split('-');
//       price = Number(price);
//       gamePrice[game] = price;
//     } else {
//       let [ game, dlc ] = line.split(':');
//       if (gamePrice.hasOwnProperty(game)) {
//         if (!gameDLC.hasOwnProperty(game)) {
//           gameDLC[game] = dlc;
//         }
//
//         gamePrice[game] *= 1.2;
//       }
//     }
//   }
//
//   for (let [game, price] of Object.entries(gamePrice)) {
//     if (!gameDLC.hasOwnProperty(game)) {
//       price *= 0.8;
//     } else {
//       price *= 0.5;
//     }
//
//     gamePrice[game] = price;
//   }
//
//   let sortAscByPrice = Object.entries(gamePrice).sort((a, b) => {
//     return a[1] - b[1];
//   });
//   let sortDescByPrice = Object.entries(gamePrice).sort((a,b) => {
//     return b[1] - a[1];
//   });
//
//   for (const [game, price] of sortAscByPrice) {
//     if (gameDLC.hasOwnProperty(game)) {
//       console.log(`${game} - ${gameDLC[game]} - ${price.toFixed(2)}`);
//     }
//   }
//
//   for (const [game, price] of sortDescByPrice) {
//     if (!gameDLC.hasOwnProperty(game)) {
//       console.log(`${game} - ${price.toFixed(2)}`);
//     }
//   }
// }