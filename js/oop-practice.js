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
//var animal, i;
//animal = new Animal("toy", "Pomeranian", "black", 15, 24);
//for (i in animal) {
//    if (animal.hasOwnProperty(i)) {
//        window.console.log(i + " = " + animal[i]);
//    }
//}

// STEP 7
//function Cat() {
//    "use strict";
//}
//
//var Dog = function () {
//    "use strict";
//};
//
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
//
//Animal.prototype.speak = function () {
//    "use strict";
//    if (this.type instanceof Dog) {
//        return "The " + this.color + " dog is barking!";
//    } else if (this.type instanceof Cat) {
//        return "The " + this.color + " cat is meowing!";
//    }
//};
//
//var animal;
//
//animal = new Animal(new Dog(), "Pomeranian", "black", 15, 24);
//window.console.log(animal.speak());
//
//animal = new Animal(new Cat(), "Calico", "tan", 15, 24);
//window.console.log(animal.speak());

// STEP 8
//function Cat() {
//    "use strict";
//}
//
//var Dog = function () {
//    "use strict";
//};
//
//function Animal(type, breed, color, height, length) {
//    "use strict";
//    
//    // Private Properties
//    var _type, _breed, _color, _height, _length;
//    _type = type;
//    _breed = breed;
//    _color = color;
//    _height = height;
//    _length = length;
//    
//    function checkType() {
//        if (_type instanceof Dog) {
//            return "dog";
//        } else {
//            return "cat";
//        }
//    }
//    
//    Animal.prototype.speak = function () {
//        return checkType();
//    };
//}
//
//var animal;
//
//animal = new Animal(new Dog(), "Pomeranian", "black", 15, 24);
//window.console.log("The " + animal.speak() + " has made a noise!");
//
//animal = new Animal(new Cat(), "Calico", "tan", 15, 24);
//window.console.log("The " + animal.speak() + " has made a noise!");

// STEP 9
//String.prototype.findWords = function (word) {
//    "use strict";
//    var search, words, output;
//    search = new RegExp(word, 'g', 'i');
//    words = this.match(search);
//    window.console.log(words);
//    
//    output = "text:\n" + this + "\n\n'" + word + "' was ";
//    if (words === null) {
//        output += "not found.";
//    } else {
//        output += "found " + words.length + " time";
//        output += (words.length === 1) ? "." : "s.";
//    }
//    window.alert(output);
//};
//
//var text, word;
//text = window.prompt("Enter a paragraph of text");
//word = window.prompt("Enter a search word");
//text.findWords(word);