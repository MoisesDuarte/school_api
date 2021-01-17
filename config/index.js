require('dotenv').config();

const config = {
    port: process.env.SERVER_PORT,
    db: {
        host: process.env.DB_HOST,
        db_name: process.env.DB_NAME,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
    }
};

module.exports = config;