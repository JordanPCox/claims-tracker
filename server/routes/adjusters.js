const express = require('express');
const router = express.Router();
const Adjuster = require('../models/Adjuster');

// Get all adjusters
router.get('/', async (req, res) => {
  try {
    const adjusters = await Adjuster.find();
    res.json(adjusters);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Add new adjuster
router.post('/', async (req, res) => {
  const { adjusterId, name, type, assignedZipCodes } = req.body;
  try {
    const newAdjuster = new Adjuster({
      adjusterId,
      name,
      type,
      assignedZipCodes,
      claimsAssigned: [],
    });
    await newAdjuster.save();
    res.json(newAdjuster);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
