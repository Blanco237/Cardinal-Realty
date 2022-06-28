const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const { Users } = require('../models');

//Encryption Level
const encLevel = 10;


// router.get('/', async (req, res) => {
//     dat = await Users.findAll();
//     res.json(dat);
// });


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
        const match = bcrypt.compare(password, data.password);
        if(match){
            res.json(data);
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