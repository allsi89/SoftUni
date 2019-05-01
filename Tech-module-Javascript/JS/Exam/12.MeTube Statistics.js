function solve(input) {
    let videos = {};
    let command = input.pop();
    input.pop();

    for (let row of input) {
        if (row === 'stats time') {
            break;
        } else {
            if (row.includes('-')) {
                let [videoName, views] = row.split('-');
                views = +views;

                if (!videos.hasOwnProperty(videoName)) {
                    videos[videoName] = {};
                    videos[videoName].views = views;
                    videos[videoName].likes = 0;
                } else {
                    videos[videoName].views += views;
                }
            }
            else {
                let [command, name] = row.split(':');

                if (command === 'like' && videos.hasOwnProperty(name)) {
                    videos[name].likes += 1;
                } else if (command === 'dislike' && videos.hasOwnProperty(name)) {
                    videos[name].likes -= 1;
                }
            }
        }
    }

    if (command === 'by likes') {
        let sorted = Object.entries(videos);
        for (let v of sorted) {
            v[1] = Object.values(v[1]);
        }
        sorted = sorted.sort((a, b) => {
            return b[1][1] - a[1][1];
        });

        for (let v of sorted) {
            console.log(`${v[0]} - ${v[1][0]} views - ${v[1][1]} likes`);
        }
    }
    else if (command === 'by views') {
        let sorted = Object.entries(videos);
        for (let v of sorted) {
            v[1] = Object.values(v[1]);
        }
        sorted = sorted.sort((a, b) => {
            return b[1][0] - a[1][0];
        });
        for (let v of sorted) {
            console.log(`${v[0]} - ${v[1][0]} views - ${v[1][1]} likes`);
        }
    }
}

solve([

    'Messi Top Goals-500',
    'Messi Top Goals-500',
    'Eminem Ringer-1000',
    'like:Eminem Ringer',
    'stats time',
    'like:Eminem Ringer','like:Eminem Ringer','like:Eminem Ringer',
    'by views'
]);