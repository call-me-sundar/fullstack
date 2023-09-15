// get the client
const mysql = require('mysql2/promise');

// create the connection to database
const pool = mysql.createPool({
  host: 'srv787.hstgr.io',
  user: 'u842521168_new',
  database: 'u842521168_new',
  password:'Admin@123'
});

pool.getConnection().then(()=>{
    console.log('db connected successfully');
}).catch((err)=>{
    console.log('db not connected'+ err);
})

module.exports = {pool};