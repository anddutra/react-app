import Knex from 'knex';

//Cria tabela no banco
export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    })
}

//Dropa tabela do banco
export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}