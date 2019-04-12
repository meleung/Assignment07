/*eslint-env browser*/

// STEP 1
function Cat() {
    "use strict";
}

var Dog = function () {
    "use strict";
};

// STEP 2
var cat, dog;
cat = new Cat();
dog = new Dog();

// STEP 3
function Animal() {
    "use strict";
    this.display = function () {
        window.console.log("The Animal has been created");
    };
}
var animal = new Animal();
animal.display();