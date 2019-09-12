const config = require('../config.json');
const server = require('./lib/server');

config.PORT = process.env.PORT || config.PORT;
connectionString = {
connectionString: process.env.DATABASE_URL,
ssl: true
};
const { Pool } = require('pg'); 
const secrets = require('../middleware/ENV').default;
const env = process.env.NODE_ENV || 'development';
let connectionString = {
    user: secrets.user,
    database: secrets.testDb,
    host: secrets.host
};
// checking to know the environment and suitable connection string to use
if (env === 'development') {
    connectionString.database = secrets.database;
} else {
    connectionString = {
    connectionString: process.env.DATABASE_URL,
    ssl: true
    };
};
const pool = new Pool(connectionString);
pool.on('connect', () => console.log('connected to db'));

 
server.run(config);
