/*eslint-env browser*/

// STEP 1
//function Cat() {
//    "use strict";
//}
//
//var Dog = function () {
//    "use strict";
//};

// STEP 2
//var cat, dog;
//cat = new Cat();
//dog = new Dog();

// STEP 3
//function Animal() {
//    "use strict";
//    this.display = function () {
//        window.console.log("The Animal has been created");
//    };
//}
//var animal = new Animal();
//animal.display();

// STEP 4
//function Animal(msg) {
//    "use strict";
//    this.msg = msg;
//    this.display = function () {
//        window.console.log(this.msg);
//    };
//}
//var animal = new Animal("The Animal has been created");
//animal.display();

// STEP 5
//function Animal(type, breed, color, height, length) {
//    "use strict";
//    
//    // Properties
//    this.type = type;
//    this.breed = breed;
//    this.color = color;
//    this.height = height;
//    this.length = length;
//}

// STEP 6
function Animal(type, breed, color, height, length) {
    "use strict";
    
    // Properties
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
}
var animal, i;
animal = new Animal("toy", "Pomeranian", "black", 15, 24);
for (i in animal) {
    if (animal.hasOwnProperty(i)) {
        window.console.log(i + " = " + animal[i]);
    }
}