
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_name: 'traditional bolognese', instructions: 'Here are some instructions', dish_id: 1 },
        { recipe_name: 'meatfeast pizza', instructions: 'Here are some instructions', dish_id: 3 },
        { recipe_name: 'spicy chilli', instructions: 'Here are some instructions', dish_id: 2 },
        { recipe_name: 'mild chilli', instructions: 'Here are some instructions', dish_id: 2 }
      ]);
    });
};
