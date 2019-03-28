
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', function (tbl) {
        tbl.increments(); // pass the name if you wanted to be called anything other than id

        tbl
            .string('ingredient_name', 255)
            .notNullable()
            .unique('uq_ingredient_name');

        
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
};
