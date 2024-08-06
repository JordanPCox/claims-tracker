import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Claims() {
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    const fetchClaims = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/claims');
        setClaims(res.data);
      } catch (error) {
        console.error('Error fetching claims:', error);
      }
    };

    fetchClaims();
  }, []);

  return (
    <div>
      <h2>Claims</h2>
      <ul>
        {claims.map((claim) => (
          <li key={claim.claimId}>
            {claim.claimId} - {claim.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Claims;
