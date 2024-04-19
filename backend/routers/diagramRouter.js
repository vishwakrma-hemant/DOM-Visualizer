const express = require('express');
const router = express.Router();

const Model = require("../model/diagramModel")

router.post("/add", (req, res) => {
    console.log(req.body);
    new Model(req.body).save()

        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.get("/getbyuser/:id", (req, res) => {

    Model.find({ user: req.params.id })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
});

// update

router.put("/update/:id", (req, res) => {

    Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((result) => {
            res.status(200).json(result);
        }
        ).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
}
);


// router.post('/fetch-dom', async (req, res) => {
//     console.log(req.body);
//     const { url } = req.body;

//     try {
//         const result = await crawlPage(url);
//         res.status.json(result);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json(error);
//     }
// });

module.exports = router;