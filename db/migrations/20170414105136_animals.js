'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('animals', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.string('image_url').notNullable();
    table.string('species').notNullable();
    table.integer('age').notNullable();
    table.text('description').notNullable();
    table.boolean('adopted').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('animals');
};
