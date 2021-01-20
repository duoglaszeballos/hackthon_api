"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
function up(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema.createTable('sales_order', table => {
            table.increments('PK_Order').notNullable();
            table.timestamp('DateTimeInsert').defaultTo(knex.fn.now());
            table.integer('FK_Customer').notNullable();
            table.string('OrderCode', 15).notNullable();
            table.timestamp('OrderDate').notNullable();
            table.enum('Status', ['Pendente', 'Confirmado', 'Cancelado'], { useNative: true, enumName: 'Pendente' }).notNullable();
            table.decimal('Discount').notNullable().defaultTo('0.00');
            table.decimal('Addition').notNullable().defaultTo('0.00');
            table.decimal('Amount').notNullable();
            table.foreign('FK_Customer').references('PK_Customer').inTable('customer');
        });
    });
}
exports.up = up;
function down(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema.dropTable('sales_order');
    });
}
exports.down = down;
