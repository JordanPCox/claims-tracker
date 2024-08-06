import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      <ul>
        {adjusters.map((adjuster) => (
          <li key={adjuster.adjusterId}>{adjuster.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Adjusters;
