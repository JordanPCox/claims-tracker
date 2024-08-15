import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Adjusters() {
  const [adjusters, setAdjusters] = useState([]);

  useEffect(() => {
    // Mock data for testing
    const mockData = [
      {
        adjusterId: 'A001',
        name: 'John Doe',
        dailyAssignmentCount: 5,
      },
      {
        adjusterId: 'A002',
        name: 'Jane Smith',
        dailyAssignmentCount: 8,
      },
      {
        adjusterId: 'A003',
        name: 'Emily Johnson',
        dailyAssignmentCount: 3,
      },
    ];
    
    setAdjusters(mockData);
  }, []);

  return (
    <div>
      <h2>Adjusters</h2>
      <table>
        <thead>
          <tr>
            <th>Adjuster Name</th>
            <th>Adjuster Number</th>
            <th>Daily Assignment Count</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {adjusters.map((adjuster) => (
            <tr key={adjuster.adjusterId}>
              <td>{adjuster.name}</td>
              <td>{adjuster.adjusterId}</td>
              <td>{adjuster.dailyAssignmentCount}</td>
              <td>
                <Link to={`/adjusters/${adjuster.adjusterId}`}>
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Adjusters;
