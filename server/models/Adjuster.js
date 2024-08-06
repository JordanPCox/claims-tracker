const mongoose = require('mongoose');

const AdjusterSchema = new mongoose.Schema({
  adjusterId: String,
  name: String,
  type: { type: String, enum: ['Field', 'Casualty'] },
  assignedZipCodes: [String],
  claimsAssigned: [
    {
      claimId: String,
      type: { type: String, enum: ['Property', 'Casualty'] },
      dateAssigned: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model('Adjuster', AdjusterSchema);
