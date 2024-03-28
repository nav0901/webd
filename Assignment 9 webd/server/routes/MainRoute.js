
const Login= require('../controllers/Users');
const router = require('express').Router();

router.post('/api/login',Login);

module.exports = router;