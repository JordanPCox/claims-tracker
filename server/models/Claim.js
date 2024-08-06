const mongoose = require('mongoose');

const ClaimSchema = new mongoose.Schema({
  claimId: String,
  type: { type: String, enum: ['Property', 'Casualty'] },
  zipCode: String,
  assignedAdjuster: String,
  dateAssigned: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Claim', ClaimSchema);
