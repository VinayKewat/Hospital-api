// imp express
const express = require('express');

// making router 
const router = express.Router();
const doctorController = require('../controllers/doctor_controller');

// route to register a new doctor
router.post('/register',doctorController.register );

// route to create a session
router.post('/login',doctorController.createSession);

// export
module.exports = router;