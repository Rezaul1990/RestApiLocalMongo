const express = require('express');
const router = express.Router();
const { getContacts, createContact } = require('../controllers/contactController');
const protect = require('../middleware/authMiddleware');

router.get('/', getContacts);   // GET /api/contact
router.post('/', protect, createContact); // POST /api/contact

module.exports = router;
