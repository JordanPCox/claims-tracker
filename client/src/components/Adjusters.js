import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Adjusters() {
  const [adjusters, setAdjusters] = useState([]);

  useEffect(() => {
    const fetchAdjusters = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/adjusters');
        setAdjusters(res.data);
      } catch (error) {
        console.error('Error fetching adjusters:', error);
      }
    };

    fetchAdjusters();
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
                <Link to={`/adjusters/${adjuster._id}`}>View Details</Link>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Adjusters;
