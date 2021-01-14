const express = require('express');
const router = express.Router();


// get request

router.get('/login', (req, res) => {

    res.json('GET RES / ')


});


router.post('/register', (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;





    console.log(req.body);




})



// post request
//router.post();


module.exports = router;