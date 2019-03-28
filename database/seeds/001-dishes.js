
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        { dish_name: 'bolognese' },
        { dish_name: 'chilli' },
        { dish_name: 'pizza' }
      ]);
    });
};
