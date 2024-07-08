const {DataTypes} = require("sequelize");

const db = require("../db/conn");

const Books = db.define("Books", {
    title: {
        type: DataTypes.STRING,
        required: true
    },
    author: {
        type: DataTypes.STRING,
        required: true
    },
    gender: {
        type: DataTypes.STRING,
        required: true
    },
    company: {
        type: DataTypes.STRING,
        required: true
    },
    abstract: {
        type: DataTypes.STRING,
        required: true
    },
    isReaded: {
        type: DataTypes.BOOLEAN,
        required: true
    },
});

module.exports = Books;