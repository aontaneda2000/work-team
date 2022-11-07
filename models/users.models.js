const db = require('./utils/database')


const Users = db.define('users', {
    id:{
        primaryKey: true,
        allowNull: false
    }
})



module.exports = Users