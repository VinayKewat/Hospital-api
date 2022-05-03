// imp express
const express = require('express');

// fix routing for status
const router = express.Router();

// route for paitents report staus 
const reportController = require('../controllers/reports_controller');

// get all reports for a particular status
router.get('/:status',reportController.filterReports);

// /export router 
module.exports = router;