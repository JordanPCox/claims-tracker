import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function AdjusterDetails() {
  const { adjusterId } = useParams();
  const [adjuster, setAdjuster] = useState(null);

  useEffect(() => {
    // Mock data for testing
    const mockData = {
      A001: {
        adjusterId: 'A001',
        name: 'John Doe',
        dailyAssignmentCount: 5,
        weeklyAssignmentCount: 25,
        monthlyAssignmentCount: 100,
        ytdAssignmentCount: 300,
        propertyAssignmentCount: 200,
        casualtyAssignmentCount: 100,
      },
      A002: {
        adjusterId: 'A002',
        name: 'Jane Smith',
        dailyAssignmentCount: 8,
        weeklyAssignmentCount: 40,
        monthlyAssignmentCount: 160,
        ytdAssignmentCount: 500,
        propertyAssignmentCount: 300,
        casualtyAssignmentCount: 200,
      },
      A003: {
        adjusterId: 'A003',
        name: 'Emily Johnson',
        dailyAssignmentCount: 3,
        weeklyAssignmentCount: 15,
        monthlyAssignmentCount: 60,
        ytdAssignmentCount: 180,
        propertyAssignmentCount: 120,
        casualtyAssignmentCount: 60,
      },
    };

    setAdjuster(mockData[adjusterId]);
  }, [adjusterId]);

  if (!adjuster) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{adjuster.name} (Adjuster #{adjuster.adjusterId})</h2>
      <p>Daily Assignments: {adjuster.dailyAssignmentCount}</p>
      <p>Weekly Assignments: {adjuster.weeklyAssignmentCount}</p>
      <p>Monthly Assignments: {adjuster.monthlyAssignmentCount}</p>
      <p>Year-to-Date Assignments: {adjuster.ytdAssignmentCount}</p>
      <p>Property Assignments: {adjuster.propertyAssignmentCount}</p>
      <p>Casualty Assignments: {adjuster.casualtyAssignmentCount}</p>
    </div>
  );
}

export default AdjusterDetails;
