import path from 'path';

/*
    Knex -> Utilizado para escrever sql em javascript
            e criar migrations.
    Migrations -> Controlam a versão do banco de dados
*/

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations',)
    },
    useNullAsDefault: true,
}