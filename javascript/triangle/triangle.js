export class Triangle {
    constructor(a, b, c) {
        this.sides = [a, b, c];
    }

    isEquilateral() {
        let sideA = this.sides[0];
        return this.isValid() && this.sides.every((i) => i === sideA);
    }

    isIsosceles() {
        return (
            this.isValid() &&
            this.sides.some((i) => this.sides.filter((x) => x === i).length > 1)
        );
    }

    isScalene() {
        return (
            this.isValid() &&
            [...new Set(this.sides)].length === this.sides.length
        );
    }

    isValid() {
        return (
            this.sides.every((i) => i > 0) &&
            this.sides[0] + this.sides[1] >= this.sides[2] &&
            this.sides[1] + this.sides[2] >= this.sides[0] &&
            this.sides[2] + this.sides[0] >= this.sides[1]
        );
    }
}
