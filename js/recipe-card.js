/*eslint-env browser*/
function Recipe(title, servings, ingredients) {
    "use strict";
    var i;
    
    // Properties
    this.title = title;
    this.servings = servings;
    this.ingredients = [];
    for (i = 0; i < ingredients.length; i += 1) {
        this.ingredients.push(ingredients[i]);
    }
    
    // Public methods
    Recipe.prototype.print = function () {
        var output;
        output  = this.title + "\n";
        output += "Serves: " + this.servings + "\n";
        output += "Ingredients:\n";
        for (i = 0; i < this.ingredients.length; i += 1) {
            output += "- " + this.ingredients[i] + "\n";
        }
        window.console.log(output);
    };
}

var recipe, title, servings, ingredients;
title = "Guacamole";
servings = 4;
ingredients = ["3 Avocados", "1 Lime", "1 Teaspoon Salt", "1/2 Cup Onion", "3 Tablespoons Cilantro", "2 Diced Tomatoes", "1 Teaspoon Garlic", "1 Pinch Ground Pepper"];

recipe = new Recipe(title, servings, ingredients);
recipe.print();