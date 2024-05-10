// const express = require('express');
// const router = express.Router();

// const Model = require("../model/adminModel")

// router.post("/add",(req, res) => {
//     console.log(req.body);
//     new Model(req.body).save()

//     .then((result ) => {
//          res.status(200).json(result);
//     }).catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//     })
// });
// router.post('/authenticate', (req, res) => {
//     Model.findOne(req.body)
//         .then((result) => {
//             if (result) {
//                 res.json(result);
//                 console.log(result);
//             } else {
//                 res.status(401).json({ message: "Invalid Credential" })
//             }
//         }).catch((err) => {
//             console.log(err);

//             res.status(500).json(err);
//         });
// });

// router.get('/getAdmin', (req,res) => {
//     Model.findById(req.user._id)
//     .then((result) => {
//         res.status(200).json(result);
//     }).catch((err) => {
//         res.status(500).json(err);
//     });
// })

// module.exports = router 