const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createRequest, getRequests, updateRequest } = require('../controllers/requestController');

router.use(auth);
router.post('/', createRequest);
router.get('/', getRequests);
router.put('/:id', updateRequest);

module.exports = router;
