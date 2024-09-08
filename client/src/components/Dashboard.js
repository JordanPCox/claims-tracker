import React, { useState, useEffect } from 'react';
import MapComponent from './MapComponent';
import AdjusterList from './AdjusterList';
import axios from 'axios';

function Dashboard() {
  const [adjusters, setAdjusters] = useState([]);
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    const fetchAdjusters = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/adjusters');
        setAdjusters(res.data);
      } catch (error) {
        console.error('Error fetching adjusters:', error);
      }
    };

    const fetchGeoData = async () => {
      try {
        const res = await axios.get('/path/to/geojson'); // Replace with actual path to GeoJSON file or API
        setGeoData(res.data);
      } catch (error) {
        console.error('Error fetching GeoJSON data:', error);
      }
    };

    fetchAdjusters();
    fetchGeoData();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '60%' }}>
        <MapComponent geoData={geoData} onZipClick={(zip) => console.log('Clicked zip:', zip)} />
      </div>
      <div style={{ width: '35%' }}>
        <AdjusterList adjusters={adjusters} />
      </div>
    </div>
  );
}

export default Dashboard;
