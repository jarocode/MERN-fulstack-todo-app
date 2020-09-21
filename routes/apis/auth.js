const express = require('express');
const {getAuth, currentuserAuth} = require('../../controllers/authController');
const auth = require('../../middleware/auth');
const router = express.Router();

router.post('/api/auth', getAuth);
router.get('/api/auth/user', auth, currentuserAuth);

module.exports = router;


