class Vector {
    constructor(components) {
        this.components = components;
    }

    add(otherVector) {
        if (this.components.length !== otherVector.components.length) {
            throw new Error('Vectors must have the same dimension for addition');
        }

        const resultComponents = this.components.map((value, index) => value + otherVector.components[index]);
        return new Vector(resultComponents);
    }

    subtract(otherVector) {
        if (this.components.length !== otherVector.components.length) {
            throw new Error('Vectors must have the same dimension for subtraction');
        }

        const resultComponents = this.components.map((value, index) => value - otherVector.components[index]);
        return new Vector(resultComponents);
    }

    dot(otherVector) {
        if (this.components.length !== otherVector.components.length) {
            throw new Error('Vectors must have the same dimension for dot product');
        }

        const result = this.components.reduce((sum, value, index) => sum + value * otherVector.components[index], 0);
        return result;
    }

    norm() {
        const result = Math.sqrt(this.components.reduce((sum, value) => sum + value * value, 0));
        return result;
    }

    toString() {
        return `(${this.components.join(',')})`;
    }

    equals(otherVector) {
        if (this.components.length !== otherVector.components.length) {
            return false;
        }

        return this.components.every((value, index) => value === otherVector.components[index]);
    }
}

const a = new Vector([1, 2, 3]);
const b = new Vector([3, 4, 5]);
const c = new Vector([5, 6, 7, 8]);

console.log(a.add(b).toString());
console.log(a.subtract(b).toString());
console.log(a.dot(b));
console.log(a.norm());
