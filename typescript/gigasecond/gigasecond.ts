class Gigasecond {
    ctx: any;

    constructor(date: any) {
        date.setTime(date.getTime() + Math.pow(10, 9) * 1000);
        this.ctx = date;
    }

    date() {
        return this.ctx;
    }
}

export default Gigasecond;
