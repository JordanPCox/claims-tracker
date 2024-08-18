const express = require('express');
const router = express.Router();
const Adjuster = require('../models/Adjuster');
const Claim = require('../models/Claim');

// Get all adjusters
router.get('/', async (req, res) => {
  try {
    const adjusters = await Adjuster.find();
    res.json(adjusters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get specific adjuster by id
router.get('/:id', async (req, res) => {
  try {
    const adjuster = await Adjuster.findById(req.params.id)
    if (!adjuster) return res.status(404).json({ message: 'Adjuster not found' });
    res.json(adjuster);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
    res.status(201).json(newAdjuster);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
