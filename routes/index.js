const express = require('express');

// router configuration
const router = express.Router();

// routing for home 
const homeController = require('../controllers/home_controller');

// alert when router loaded 
console.log('router loaded');

// route for home 
router.get('/',homeController.home );

// for routes related to doctor
router.use('/doctors',require('./doctor'));

// for routes related to patient
router.use('/patients',require('./patient'));

// routes for reports
router.use('/reports',require('./reports'));

// exports routers
module.exports = router;