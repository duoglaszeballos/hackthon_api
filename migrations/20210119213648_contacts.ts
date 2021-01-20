import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('contacts', table => {
    table.increments('PK_Contact').notNullable();
    table.timestamp('DateTimeInsert').defaultTo(knex.fn.now());
    table.integer('FK_Customer').notNullable();
    table.string('ContactName', 60).notNullable();
    table.string('Phone', 15).notNullable();
    table.string('Email', 100).notNullable()
    table.foreign('FK_Customer').references('PK_Customer').inTable('customer')

})
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('contacts')
}

