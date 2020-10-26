class Company {
    name;
    establishedDate;
    country;
    businessType;
    employees;

    constructor(name, establishedDate, country, businessType, employees) {
        this.name = name;
        this.establishedDate = establishedDate;
        this.country = country;
        this.businessType = businessType;
        this.employees = employees;
    }

    showCEO() {}
    showManagers() {}
    showStaffs() {}

}

class Employee {
    name;
    sex;
    age;
    adress;

    constructor(name, sex, age, adress) {
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.adress = adress;
    }

    about() {
        console.log(this)
    }
}

class CEO extends Employee {
    strategy;
    constructor(name, sex, age, adress, strategy) {
        super(name, sex, age, adress);
        this.strategy = strategy;
    }
}

class Manager extends Employee {
    managementStyle;
    constructor(name, sex, age, adress, managementStyle) {
        super(name, sex, age, adress);
        this.managementStyle = managementStyle;
    }
}

class Staff extends Employee {
    experience;
    constructor(name, sex, age, adress, experience) {
        super(name, sex, age, adress);
        this.experience = experience;
    }
}

let longku = new CEO('long', 'male', '69', 'Hanoi', 'bán hàng đa cấp')
console.log(longku)