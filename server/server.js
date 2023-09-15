const express = require('express')
const app = express();
require('dotenv').config();// dot env method
const port = process.env.PORT;
const cors = require('cors');
const taskRoutes  = require('./routes/taskRoutes')

app.get('/', function (req, res) {
    res.send('server run port on '+ port)
  })


// cors which means connect frontend to backend
app.use(cors())

// json which means body pareser
app.use(express.json());

// routes
app.use('/', taskRoutes );

// middle ware
app.use((req, res, next)=>{
    console.log(req.path + res.status);
    next();
})


app.listen(port, ()=>{
    console.log('server run port on '+ port );
})
