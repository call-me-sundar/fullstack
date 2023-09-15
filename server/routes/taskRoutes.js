const express = require('express')
const route = express.Router();

const {collectData} = require('../controllers/taskController')

route.get('/collectdata', collectData);

module.exports = route;


