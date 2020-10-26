class Person {
    name;
    sex;
    age;
    constructor(name, sex, age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }
    speak() {
        console.log(`toi bi gay`);
    };
}

class Boy extends Person {
    strength;
    constructor(name, sex, age, strength) {
        super(name, sex, age);
        this.strength = strength;
        this.sex = 'male';

    }
}

class Girl extends Person {
    beauty;
    constructor(name, sex, age, beauty) {
        super(name, sex, age);
        this.beauty = beauty;
        this.sex = 'female';

    }
}

class GoodBoy extends Boy {
    poor;
    constructor(name, sex, age, strength, poor) {
        super(name, sex, age, strength);
        this.poor = poor;

    }
}

class BigCityBoy extends Boy {
    rich;
    constructor(name, sex, age, strength, rich) {
        super(name, sex, age, strength);
        this.rich = rich;

    }
}

class GoodGirl extends Girl {
    poor;
    constructor(name, sex, age, beauty, poor) {
        super(name, sex, age, beauty);
        this.poor = poor;

    }
}

class BadGirl extends Girl {
    rich;
    constructor(name, sex, age, beauty, rich) {
        super(name, sex, age, beauty);
        this.rich = rich;

    }
}

let long = new BadGirl('long', '', '19', true, 'ugly', 'poor');
long.speak();
console.log(long);