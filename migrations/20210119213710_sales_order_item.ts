import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('sales_order_item', table => {
    table.increments('PK_OrderItem').notNullable();
    table.timestamp('DateTimeInsert').defaultTo(knex.fn.now());
    table.integer('FK_Order').notNullable();
    table.integer('FK_Product').notNullable();
    table.decimal('Quantity').notNullable();
    table.decimal('ProductValue').notNullable();
    table.foreign('FK_Order').references('PK_Order').inTable('sales_order')
    table.foreign('FK_Product').references('PK_Product').inTable('products')

})
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('sales_order_item')
}

