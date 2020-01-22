const Pool = require('pg').Pool
const config = require('./config/postgresConfig');
const pool = new Pool(config);

const addData = (req) => {
    return pool.query(`INSERT INTO ttsData (name, brand, ttsdata) VALUES ($1, $2, $3)`, [req.name.toLowerCase(), req.brand.toLowerCase(), req.ttsData]);
}

const getAverage = (req) => {
    return pool.query(`SELECT ttsData FROM ttsData WHERE brand = $1 AND name = $2`, [req.brand.toLowerCase(), req.name.toLowerCase()]);
}

const deleteTTSData = (req) => {
    return pool.query('DELETE FROM ttsData WHERE brand = $1 AND name = $2 AND ttsData = $3', [req.brand.toLowerCase, req.name.toLowerCase, parseInt(req.ttsValue)]);
}

module.exports = {addData, getAverage, deleteTTSData}
