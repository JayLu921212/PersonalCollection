"use strict";
(function () {


    function log() {
        a = 1;
        console.log(a);
    }

    log();

    function Animal(name) {
// 属性
        this.name = name || 'Animal';
// 实例方法
        this.sleep = function () {
            console.log(this.name + '正在睡觉！');
        };
        this.number = 1;
    }

// 原型方法
    Animal.prototype.eat = function (food) {
        console.log(this.name + '正在吃：' + food);
    };
    function Cat() {
    }

    Cat.prototype = new Animal();
    Cat.prototype.name = 'cat';

    function Dog() {
    }

    Dog.prototype = new Animal();
    Dog.prototype.name = 'dog';
//　Test Code
    var cat = new Cat();
    var dog = new Dog();
    console.log(cat.name);
    console.log(cat.eat('fish'));
    console.log(cat.sleep());
    console.log(cat instanceof Animal); //true
    console.log(cat instanceof Cat); //true

    Animal.prototype.shit = function () {
        console.log("shit");
    };
    cat.shit();
// console.log(Dog.number);
    console.log(dog.number);
    cat.number = 2;
    console.log(dog.number);

})();