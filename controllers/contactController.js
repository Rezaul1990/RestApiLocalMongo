const Contact = require('../models/Contact');

// @desc    Get all contacts
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json({
      message: '✅ Contact list',
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create new contact
exports.createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const contact = await Contact.create({ name, email, message });

    res.status(201).json({
      message: '✅ Contact created',
      data: contact,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};