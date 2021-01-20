module.exports = {
  client: 'mysql',
  connection: {
    database: 'loja',
    user: 'root',
    password: 'loja'
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
