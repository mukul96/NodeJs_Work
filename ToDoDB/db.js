const Sequelize = require('sequelize');

const db = new Sequelize({
    host: '127.0.0.1',
    username: 'someuser',
    database: 'somedatabase',
    password: 'somepass',
    dialect: 'mysql'
})


const Todos = db.define('todos', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    task: Sequelize.DataTypes.STRING,
    done: Sequelize.DataTypes.BOOLEAN
})

db.sync({force: true}).then(function () {
    console.log("Database is ready");
})

function addTodo(task) {
    return Todos.create({
        task: task,
        done: false
    })
}

function getTodos () {
    return Todos.findAll()
}

module.exports = {
    addTodo, getTodos
}
