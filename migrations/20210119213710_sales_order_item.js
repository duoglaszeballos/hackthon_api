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
        return knex.schema.createTable('sales_order_item', table => {
            table.increments('PK_OrderItem').notNullable();
            table.timestamp('DateTimeInsert').defaultTo(knex.fn.now());
            table.integer('FK_Order').notNullable();
            table.integer('FK_Product').notNullable();
            table.decimal('Quantity').notNullable();
            table.decimal('ProductValue').notNullable();
            table.foreign('FK_Order').references('PK_Order').inTable('sales_order');
            table.foreign('FK_Product').references('PK_Product').inTable('products');
        });
    });
}
exports.up = up;
function down(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema.dropTable('sales_order_item');
    });
}
exports.down = down;
