const db = require('../models/db');

const collectData = async(req, res) =>{
    try{
        const [result] = await db.pool.query("SELECT * FROM details")
        res.status(200).json(result);
    }catch(err){
        console.log(err);
        res.status(400).json({"err": err});
    }
}

module.exports = {collectData}