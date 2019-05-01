function volleyBall([year, holydays, h]) {
    let leapNormal = year;
    let p = Number(holydays);
    let gamesInOwnTown = Number(h);
    let weekendsInSofia = 48 - h;
    let gamesInSofia = weekendsInSofia * 0.75;
    let gamesHolydays = p * 2 / 3;
    let games = gamesInOwnTown + gamesInSofia + gamesHolydays;

    if (leapNormal == "leap") {
        games = games * 1.15;
    }
    else if (leapNormal == "Normal") {
        games = games;
    }
    console.log(Math.floor(games));
} volleyBall(["leap", 12, 5]);