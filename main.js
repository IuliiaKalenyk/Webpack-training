import test from "./test";

class Test {
    constructor(name) {
        this.name = name;
    }
    testClass() {
        console.log(this.name);
    }
}

const test1 = new Test("Ашот");
test1.testClass();

test();