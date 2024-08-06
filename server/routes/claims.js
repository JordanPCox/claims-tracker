const express = require('express');
const router = express.Router();
const Claim = require('../models/Claim');

// Get all claims
router.get('/', async (req, res) => {
  try {
    const claims = await Claim.find();
    res.json(claims);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Add new claim
router.post('/', async (req, res) => {
  const { claimId, type, zipCode, assignedAdjuster } = req.body;
  try {
    const newClaim = new Claim({
      claimId,
      type,
      zipCode,
      assignedAdjuster,
      dateAssigned: new Date(),
    });
    await newClaim.save();
    res.json(newClaim);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
