import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('sales_order', table => {
    table.increments('PK_Order').notNullable();
    table.timestamp('DateTimeInsert').defaultTo(knex.fn.now());
    table.integer('FK_Customer').notNullable();
    table.string('OrderCode', 15).notNullable();
    table.timestamp('OrderDate').notNullable();
    table.enum('Status', ['Pendente', 'Confirmado', 'Cancelado'], {useNative: true, enumName: 'Pendente'}).notNullable();
    table.decimal('Discount').notNullable().defaultTo('0.00');
    table.decimal('Addition').notNullable().defaultTo('0.00');
    table.decimal('Amount').notNullable();
    table.foreign('FK_Customer').references('PK_Customer').inTable('customer')

})
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('sales_order')
}

