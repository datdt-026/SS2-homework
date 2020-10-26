// let input = prompt("nhập dãy số");
// let nums = input.split(',').map(function(item) {
//     return Number(item);
// })

// let x = Number(prompt("nhập số x:"));
// for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] + nums[j] == x) {
//             console.log(`(${i}, ${j})`)
//         }
//     }
// }
// // let result = [];
// // for (let num of nums) {
// //     result.push(Number(num))
// // }


// // console.log(result)

// // let arr = [1, 2, 3, 4, 5, 6];
// // let result = arr.map(function(item) {
// //     return item * item;
// // })

// // let result = [];
// // for (let item of arr) {
// //     result.push(item * item);
// // }






// console.log(nums)


//class - object
//class: bản thiết kế tạo 1 đối tượng
// class Person {
//     name;
//     age;
//     address;
//     sex;
//     marriaged;

//     //Phương thức đặc biệt, được gọi khi gọi new Person

//     constructor(name, age, address, sex, marriaged) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//         this.sex = sex;
//         this.marriaged = marriaged;
//         console.log(this);

//     }

//     run() {
//         console.log(`i'm running`);
//     }

//     walk() {
//         console.log(`i'm walking`);
//     }

//     goTo(destination) {
//         console.log(`i'm going to ${destination}`);
//     }

//     calculateSum(a, b) {
//         console.log(`${a} + ${b} = ${a + b}`);
//     }

//     sleep = function() {

//     }

//     laugh = () => {

//     }

//     introduce() {
//         console.log(`
//         Hello,
//         Minh la ${this.name},
//         Minh nam nay ${this.age},
//         Que minh o ${this.address},        
//         `);
//     }

// }

//object: đôi tượng cụ thể đc tạo từ class

// let hoangAnh = new Person('hoangAnh', 20, 'Bac Giang', 'male', false);
// hoangAnh.goTo('Quat Lam');
// hoangAnh.introduce();

// // console.log(hoangAnh);

// let tung = new Person('tung', 29, 'phu tho', 'male', false);
// tung.goTo('cf house');

// let duy = new Person('duy', 20, 'phu tho', 'male', false);
// duy.sleep();

// let long = new Person();
// long.name = "Nger";
// long.age = "20";
// long.address = "Pho Vong";
// long.marriaged = true;
// long.sex = "Gey";

// let vinh = new Person();
// vinh.age = "19";
// vinh.name = "Vinh";
// vinh.address = "Pho Vong";
// vinh.sex = " gey";
// vinh.marriaged = false;

// console.log(vinh);
// console.log(long);






// class Animal {
//     name;
//     gender;
//     species;
//     color;
//     legs;

//     constructor(name, gender, species, color, legs) {
//         this.name = name;
//         this.gender = gender;
//         this.species = species;
//         this.color = color;
//         this.legs = legs;
//         console.log(this);
//     }

//     speak() {
//         console.log(`${this.name} biet noi`);
//     }

//     walk() {
//         console.log(`con nay co ${this.legs} chan`);
//     }





// }


// let dog = new Animal('dog', 'male', 'alaska', 'black', 4);
// dog.speak();

// let cat = new Animal('cat', 'female', 'house cat', 'white', 4);
// cat.walk();



//kế thừa - Inheritance

class Person {
    name;
    sex;
    age;
    slogan;

    constructor(name, sex, age, slogan) {
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.slogan = slogan;
        // console.log(this);
    }
}

class GoodBoy extends Person {
    poor;
    constructor(name, sex, age, slogan, poor) {
        super(name, sex, age, slogan);
        this.poor = poor;
        // console.log(this);

    }
}
class BigCityBoy extends Person {
    rich;
    constructor(name, sex, age, slogan, rich) {
        super(name, sex, age, slogan);
        this.rich = rich;
        // console.log(this);

    }
}

class YellowBoy extends Person {
    amount;
    constructor(name, sex, age, slogan, amount) {
        super(name, sex, age, slogan);
        this.amount = amount;
        // console.log(this);
    }

}


let long = new BigCityBoy('long', 'male', 20, 'im a buck foi', true);
console.log(long);

let huyu = new YellowBoy('long', 'male', 20, 'im a buck foi', '200k');
console.log(huyu);