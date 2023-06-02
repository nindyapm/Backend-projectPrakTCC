// import {Sequelize} from "sequelize";

// const db = new Sequelize('project_praktcc', 'dataproject', 'projecttcc', {
//     dialect: 'mysql',
//     dialectOptions: {
//         socketPath: '/cloudsql/final-project-388509:asia-southeast1:dataproject'
//     }
// });

// export default db;
const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

// Membuat koneksi ke database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Terhubung ke database MySQL');
});

module.exports = db;
