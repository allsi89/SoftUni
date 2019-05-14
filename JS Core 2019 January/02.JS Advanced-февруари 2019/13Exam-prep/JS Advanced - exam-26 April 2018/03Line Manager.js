class LineManager {
    get stops() {
        return this._stops;
    }

    set stops(givenStops) {
        let stops = [];
        for (const stop of givenStops) {
            if (stop.name === '' || stop.timeToNext < 0) {
               throw Error('Name is empty or time to next stop is invalid number!');
            } else {
                stops.push(stop);
            }
        }
        return this._stops = stops;
    }

    constructor(stops) {
        this.stops = stops;
        this
    }

    get atDepot(){
        for (let stop = 0; stop < this.stops.length; stop++) {
            if (stop === this.stops.length - 1) {
                return true;
            } else {
                return false;
            }
        }
    }

    get nextStopName() {

    }

    get currentDelay() {

    }

    toString() {
        let nextStop;
        let stopsCovered;
        let timeOnCourse;
        let delay;

    }

}

const man = new LineManager([
    {name: 'Depot', timeToNext: 4},
    {name: 'Romanian Embassy', timeToNext: 2},
    {name: 'TV Tower', timeToNext: 3},
    {name: 'Interpred', timeToNext: 4},
    {name: 'Dianabad', timeToNext: 2},
    {name: 'Depot', timeToNext: 0},
]);

console.log(man);


