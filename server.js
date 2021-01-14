const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.json());

// ROUTES
app.use('/admin', require('./routes/admin'));



app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
})