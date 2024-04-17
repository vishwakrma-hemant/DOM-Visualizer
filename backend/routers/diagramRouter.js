const express = require('express');
const router = express.Router();

const Model = require("../model/diagramModel")
const crawlPage = require("../utils/crawler");

router.post("/add",(req, res) => {
    console.log(req.body);
    new Model(req.body).save()

    .then((result ) => {
         res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.post('/fetch-dom', async (req, res) => {
    console.log(req.body);
    const { url } = req.body;
    
    try {
        const result = await crawlPage(url);
        res.status.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

module.exports = router;