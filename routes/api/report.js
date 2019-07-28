const express = require('express');
const router = express.Router();
const app = express();
app.use(express.json());

const Report = require('../../models/report')

//User POST A Report
router.post('/', (req, res) => {
const report = new Report({
    carId: req.body.carId,
    manufacturer: req.body.manufacturer,
    reporter: req.body.reporter,
    email: req.body.email,
    report: req.body.report,
})
report.save()
.then(report => res.status(201).json({report, msg:'report submitted'}))
.catch(err => res.status(500).json({error:err}))
})


//Admin GETS ALL Report
router.get('/', (req, res) => {
    Report.find()
    .exec()
    .then(reports => res.status(200).json({reports}))
})

module.exports = router;