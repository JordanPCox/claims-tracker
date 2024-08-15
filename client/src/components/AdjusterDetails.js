import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function AdjusterDetails() {
    const { adjusterId } = useParams();
    const [adjuster, setAdjuster] = useState(null);

    useEffect(() => {
        const fetchAdjusterDetails = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/adjusters/${adjusterId}`);
                setAdjuster(res.data);
            } catch (error) {
                console.error('Error fetching adjuster details:', error);
            }
        }

        fetchAdjusterDetails()
    }, [adjusterId]);

    if (!adjuster) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h2>{adjuster.name} (Adjuster #{adjuster.adjusterId})</h2>
            <p>Assignments Today: {adjuster.dailyAssignmentCount}</p>
            <p>Assignments This Week: {adjuster.weeklyAssignmentCount}</p>
            <p>Assignments This Month: {adjuster.monthlyAssignmentCount}</p>
            <p>Assignments This Year: {adjuster.yearlyAssignmentCount}</p>
            <p>Property Assignments: {adjuster.propertyAssignmentCount}</p>
            <p>Casualty Assignments: {adjuster.casualtyAssignmentCount}</p>
        </div>
    );
}

export default AdjusterDetails;