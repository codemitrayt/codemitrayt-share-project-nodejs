const { config } = require("dotenv");
config();

const credentials = ({ APP_PORT, PRIVAT_KEY, NODE_ENV } = process.env);

module.exports = credentials;
