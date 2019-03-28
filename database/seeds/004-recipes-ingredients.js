
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes-ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes-ingredients').insert([
        { recipe_id: 1, ingredient_id: 1, quantity: "2 tins" },
        { recipe_id: 1, ingredient_id: 3, quantity: "200g" },
        { recipe_id: 1, ingredient_id: 4, quantity: "1 large" },
        { recipe_id: 1, ingredient_id: 5, quantity: "2 cloves" },
        { recipe_id: 1, ingredient_id: 6, quantity: "500 g" },
        { recipe_id: 1, ingredient_id: 8, quantity: " a pinch" },
        { recipe_id: 2, ingredient_id: 1, quantity: "one carton pasata" },
        { recipe_id: 2, ingredient_id: 2, quantity: "500g" },
        { recipe_id: 2, ingredient_id: 6, quantity: "200g" },
        { recipe_id: 2, ingredient_id: 8, quantity: "2 pinches" },
        { recipe_id: 2, ingredient_id: 9, quantity: "300g" },
        { recipe_id: 2, ingredient_id: 10, quantity: "50g" },
        { recipe_id: 2, ingredient_id: 12, quantity: "200g" },
        { recipe_id: 3, ingredient_id: 1, quantity: "2 tins" },
        { recipe_id: 3, ingredient_id: 4, quantity: "1 large" },
        { recipe_id: 3, ingredient_id: 5, quantity: "2 cloves" },
        { recipe_id: 3, ingredient_id: 6, quantity: "500g" },
        { recipe_id: 3, ingredient_id: 7, quantity: "generous helping" },
        { recipe_id: 3, ingredient_id: 8, quantity: "a pinch" },
        { recipe_id: 3, ingredient_id: 11, quantity: "2 cups" },
        { recipe_id: 4, ingredient_id: 1, quantity: "2 tins" },
        { recipe_id: 4, ingredient_id: 4, quantity: "1 large" },
        { recipe_id: 4, ingredient_id: 5, quantity: "2 cloves" },
        { recipe_id: 4, ingredient_id: 6, quantity: "500g" },
        { recipe_id: 4, ingredient_id: 7, quantity: "half a teaspoon" },
        { recipe_id: 4, ingredient_id: 8, quantity: "a pinch" },
        { recipe_id: 4, ingredient_id: 11, quantity: "2 cups" }
      ]);
    });
};
