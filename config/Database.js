import {Sequelize} from "sequelize";

const db = new Sequelize('project_praktcc', 'dataproject', 'projecttcc', {
    dialect: 'mysql',
    dialectOptions: {
        socketPath: '/cloudsql/final-project-388509:asia-southeast1:dataproject'
    }
});

export default db;
