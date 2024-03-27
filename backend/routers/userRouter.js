const express = require('express');
const router = express.Router();



const Model = require("../model/userModel")

router.post("/add",(res, req) => {
    new Model(req.body).save()

    .then((result ) => {
       res.json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    })
});

module.exports = router 