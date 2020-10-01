export class Clock {
    constructor(hours, minutes = 0) {
        this.plus(hours * 60 + minutes);
    }

    toString() {
        return `${this.hours < 10 ? "0" : ""}${this.hours}:${
            this.minutes < 10 ? "0" : ""
        }${this.minutes}`;
    }

    plus(minutes) {
        minutes += this.minutes || 0;
        let hours = ((this.hours || 0) + Math.floor(minutes / 60)) % 24;
        minutes = minutes % 60;
        this.hours = hours < 0 ? 24 + hours : hours;
        this.minutes = minutes < 0 ? 60 + minutes : minutes;
        return this;
    }

    minus(minutes) {
        return this.plus(minutes * -1);
    }

    equals(clock) {
        return clock.toString() === this.toString();
    }
}
