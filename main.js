class Test { 
    constructor(name) {
        this.name = name;
    }
    testClass() {
        console.log(this.name);
    }
}

const test = new Test("Ашот");
test.testClass();