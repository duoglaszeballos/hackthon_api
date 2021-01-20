import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('products', table => {
    table.increments('PK_Product').notNullable();
    table.timestamp('DateTimeInsert').defaultTo(knex.fn.now());
    table.string('Description').notNullable();
    table.string('Unit', 5).notNullable();
    table.string('BarCode', 15).notNullable();
    table.string('Email', 100).notNullable()
    table.decimal('UnitaryValue').notNullable()
})
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('products')
}

