const express = require('express');
const {getUser, postUser} = require('../../controllers/userController');

const router = express.Router();

router.get('/api/users', getUser);
router.post('/api/users', postUser);

module.exports = router;