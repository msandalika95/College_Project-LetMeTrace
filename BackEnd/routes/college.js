const router = require("express").Router();
//const date = require('date-and-time');
let College = require("../models/checkIns");

router.route("/add").post((req,res) => {
    const nic = req.body.nic;
    const telnumber = Number(req.body.telnumber);
    

    const newVisitor = new College({
        nic,
        telnumber
        
    })

    newVisitor.save().then(() => {
        res.json("Visitor added")
    }).catch((err) => {
        console.log(err)
    })

})

router.route("/").get((req,res) => {
    College.find().then((visitors) => {
        res.json(visitors)
    }).catch((err) => {
        console.log(err)
    })
})

module.exports = router;

