const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const { Users } = require('../models');

//Encryption Level
const encLevel = 10;

//Secret Key
const JWT_SECRET = 'Xn#1@2$3%4^5&6*7(8)9_0+-=qwerty';


router.post('/check', async (req, res) => {
    const { token } = req.headers;
    const decoded = await jwt.verify(token, JWT_SECRET);
    res.json(decoded);
});


router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    let hashedPassword = await bcrypt.hash(password, encLevel);
    const finalData = { name, email, 'password': hashedPassword }
    try{
        await Users.create(finalData);
        res.json(finalData);
    }catch(e){
        res.status(400).json({ error: e.message });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const data = await Users.findOne({
        where: {
            email,
        }
    });

    if(data){
        const match = await bcrypt.compare(password, data.password);
        if(match){
            console.log("Passwords Match");
            key = await jwt.sign(JSON.stringify(data.dataValues), JWT_SECRET);
            res.json(key);
        }
        else {
            res.json({'error' : `Wrong password for ${email}`});
        }
    }
    else{
        res.json({ "error" : 'User Not Found'});                                                                   
    }
}
);


module.exports = router;