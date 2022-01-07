
const mysql = require("mysql");
const Promise = require("bluebird");
const { add } = require("nodemon/lib/rules");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "projectE",
};

async function connectionCheck()
{
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("Connected")
    await connection.endAsync();
};
// connectionCheck();




const user = {username: "Nikhil"}

const selectAllUser = async() => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const sql = `select * from t2`;
    const list = await connection.queryAsync(sql,[]);
    await connection.endAsync();
    return list;
}

const addUser = async(user) => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const sql = `insert into t2 (username, message) value (?, ?)`;
    await connection.queryAsync(sql, [user.username, user.message]);
    await connection.endAsync();
}

selectAllUser();
module.exports = {selectAllUser, addUser};