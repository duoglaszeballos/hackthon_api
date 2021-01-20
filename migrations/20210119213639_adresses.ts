import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('adresses', table => {
    table.increments('PK_Address').notNullable();
    table.timestamp('DateTimeInsert').defaultTo(knex.fn.now());
    table.integer('FK_Customer').notNullable();
    table.string('Address').notNullable();
    table.string('Number', 5).notNullable();
    table.string('Neighborhood', 60).notNullable()
    table.string('City').notNullable()
    table.string('Complement').notNullable()
    table.string('UF').notNullable()
    table.enum('TypeAddress', ['Entrega', 'Cobranca'], {useNative: true, enumName: 'Entrega'}).notNullable();
    table.foreign('FK_Customer').references('PK_Customer').inTable('customer')

})
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('adresses')
}

