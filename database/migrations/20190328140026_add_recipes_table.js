
exports.up = function (knex, Promise) {
    return knex.schema.createTable('recipes', function (tbl) {
        tbl
            .increments(); // pass the name if you wanted to be called anything other than id

        tbl
            .string('recipe_name', 255)
            .notNullable()
            .unique('uq_recipe_name');

        tbl
            .string('instructions', 255);

        tbl
            .integer('dish_id')
            .unsigned()
            .references('id')
            .inTable('dishes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
};
