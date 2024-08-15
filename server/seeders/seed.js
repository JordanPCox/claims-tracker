const mongoose = require('mongoose');
const Adjuster = require('../models/Adjuster');
const Claim = require('../models/Claim');
const dotenv = require('dotenv');

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const adjusters = [
  {
    adjusterId: '5772',
    name: 'Jordan Cox',
    type: 'Field',
    assignedZipCodes: ['27513', '27514'],
    claimsAssigned: [],
  },
  {
    adjusterId: 'A002',
    name: 'Jane Smith',
    type: 'Casualty',
    assignedZipCodes: [],
    claimsAssigned: [],
  },
  {
    adjusterId: 'A003',
    name: 'Emily Johnson',
    type: 'Field',
    assignedZipCodes: ['27606', '27607'],
    claimsAssigned: [],
  },
];

const claims = [
  {
    claimId: 'C001',
    type: 'Property',
    zipCode: '27513',
    assignedAdjuster: 'A001',
    dateAssigned: new Date(),
  },
  {
    claimId: 'C002',
    type: 'Casualty',
    zipCode: '27514',
    assignedAdjuster: 'A002',
    dateAssigned: new Date(),
  },
  {
    claimId: 'C003',
    type: 'Property',
    zipCode: '27606',
    assignedAdjuster: 'A003',
    dateAssigned: new Date(),
  },
];

const seedDatabase = async () => {
  try {
    // Clear existing data
    await Adjuster.deleteMany({});
    await Claim.deleteMany({});

    // Insert seed data
    const createdAdjusters = await Adjuster.insertMany(adjusters);
    const createdClaims = await Claim.insertMany(claims);

    console.log('Database seeded successfully!');
    console.log('Adjusters:', createdAdjusters);
    console.log('Claims:', createdClaims);

    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
