const knex = require('knex');
const knexConfig = require('../knexfile.js').development;

const db = knex(knexConfig);

module.exports = {
    getDishes,
    getDish,
    addDish,
    getRecipes,
    addRecipe
};

function getDishes() {
    return db("dishes");
}

// I think this fails where there's nothing to innerJoin to
// aka looking up a new dish without any recipes
// leftJoin fixes this problem and shows the recipie name as null
function getDish(id) {
    return db("dishes")
        .leftJoin("recipes", "dishes.id", "=", "recipes.dish_id")
        .select("dishes.id", "dishes.dish_name", "recipes.recipe_name")
        .where({ "dishes.id": id })
        // .groupBy('dishes.dish_name')
}

function addDish(dish) {
    return db("dishes")
        .insert(dish)
}

// there are dishes for all recipes so inner join has no beef
function getRecipes() {
    return db("recipes")
        .join("dishes", "dishes.id", "=", "recipes.dish_id")
        .select(
            "recipes.id",
            "recipes.recipe_name",
            { dish: "dishes.dish_name" },
            "recipes.instructions"
        );
}

function addRecipe(recipe) {
    return db("recipes")
        .insert(recipe)
        // .then(ids => ids[0])
}