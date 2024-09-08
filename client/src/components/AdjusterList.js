import React from 'react';
import { Link } from 'react-router-dom';

function AdjusterList({ adjusters }) {
  const getColor = (count) => {
    if (count < 10) return 'green'; // Low workload
    if (count < 20) return 'yellow'; // Medium workload
    return 'red'; // High workload
  };

  return (
    <div>
      <h2>Adjuster Assignments</h2>
      <ul>
        {adjusters.map((adjuster) => (
          <li key={adjuster._id} style={{ backgroundColor: getColor(adjuster.assignmentCount), padding: '10px', margin: '5px', borderRadius: '5px' }}>
            <Link to={`/adjusters/${adjuster._id}`} style={{ textDecoration: 'none', color: 'black' }}>
              {adjuster.name} - {adjuster.assignmentCount} Assignments
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdjusterList;