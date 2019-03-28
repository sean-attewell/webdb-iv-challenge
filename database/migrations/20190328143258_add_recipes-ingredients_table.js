
exports.up = function (knex, Promise) {
    return knex.schema.createTable('recipes-ingredients', tbl => {
        tbl.increments();
        
        tbl
            .integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        tbl.integer('ingredient_id')
            .unsigned()
            .references('id')
            .inTable('ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        tbl.float('quantity') // i've just put in strings - can't for calcs
            .unsigned();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('recipes-ingredients');
};
