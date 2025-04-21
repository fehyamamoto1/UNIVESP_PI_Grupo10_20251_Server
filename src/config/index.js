const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    env: process.env['ENV'] ?? 'local',
    port: process.env['PORT'] ?? 3000,
    databaseConnectionString: process.env['DATABASE_CONNECTION_STRING'] ?? 'mongodb+srv://23215784:Q8NiTchqryZjCjXN@cluster0.wtxermd.mongodb.net/PrincipalDB?retryWrites=true&w=majority&appName=Cluster0'
};