
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'tomato' }, // 1
        { ingredient_name: 'cheese' }, // 2
        { ingredient_name: 'pasta' }, // 3
        { ingredient_name: 'onion' }, // 4
        { ingredient_name: 'garlic' }, // 5
        { ingredient_name: 'beef mince' }, // 6
        { ingredient_name: 'hot chilli powder' }, // 7
        { ingredient_name: 'salt' }, // 8
        { ingredient_name: 'flour' }, // 9
        { ingredient_name: 'yeast' }, // 10
        { ingredient_name: 'rice' }, // 11
        { ingredient_name: 'chicken' } // 12
      ]);
    });
};
