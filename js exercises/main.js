function fibonacci(num) {
    var a = 1, b = 0, temp;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}

function fibonacci(num) {
    if (num <= 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);
}

var factorial = function (number) {
    if (number <= 0) { // terminal case
        return 1;
    } else { // block to execute
        return (number * factorial(number - 1));
    }
};

function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else
        return base * power(base, exponent - 1);
}

function mult(a, b) {
    if (b == 0) {
        return 0;
    }
    if (b > 0) {
        return (a + mult(a, b - 1))
    }
    if (b < 0) {
        return -mult(a, -b)
    }
}

// Creates a stack
class Stack {
    constructor() {
        this.count = 0;
        this.storage = {};
        // Adds a value onto the end of the stack
        this.push = function (value) {
            this.storage[this.count] = value;
            this.count++;
        };
        // Removes and returns the value at the end of the stack
        this.pop = function () {
            if (this.count === 0) {
                return null;
            }
            this.count--;
            var result = this.storage[this.count];
            delete this.storage[this.count];
            return result;
        };
        this.size = function () {
            return this.count;
        };
        // Returns the value at the end of the stack
        this.peek = function () {
            return this.storage[this.count - 1];
        };
    }
}

class Queue {
    constructor() {
        this.collection = [];
        this.print = function () {
            console.log(this.collection);
        };
        this.enqueue = function (element) {
            this.collection.push(element);
        };
        this.dequeue = function () {
            return this.collection.shift();
        };
        this.front = function () {
            return this.collection[0];
        };
        this.size = function () {
            return this.collection.length;
        };
        this.isEmpty = function () {
            return (this.collection.length === 0);
        };
    }
}
