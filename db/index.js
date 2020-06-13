const chalk = require('chalk');
const Sequelize = require('sequelize');
const url = `postgres://localhost:5432/animal_db`;

const sequelize = new Sequelize(url, {
    timestamps: true
});

chalk.yellow(`Opening database connection to ${url}`);

const Animal = sequelize.define('animal', {
    name: Sequelize.STRING,
    type: Sequelize.STRING,
})

// force: true will drop the table if it already exists
Animal.sync({force: true}).then(() => {
    // Table created
    return Animal.create({
        name: "Tiger",
        type: "cat"
    }).then(() => {
        Animal.create({
            name: "Wolf",
            type: "not cat"
        })
    });
});

module.exports = {
    Animal
};