import { Radar, RadarChart, PolarGrid, PolarAngleAxis, Legend, ResponsiveContainer } from 'recharts';
import React, { useEffect, useState } from "react";
import { fetchURLs } from "../Services/fetchURLs";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';

function UserRadarChart() {

    const [userPerformance, setUserPerformance] = useState([]);
    const [error, setError] = useState([]);
    const idParams = useParams().id;
    
    /**
   * Update the state with the fetched data
   */
    useEffect(() => {
        let mounted = true;
        fetchURLs(idParams)
            .then(items => {
                if (mounted) {
                    setUserPerformance([items[2].data])
                }
            })
            .catch(items => {
                if (mounted) {
                    setError(items.message)
                }
            })
        return () => mounted = false;
    }, [idParams, error]);

    const performance = userPerformance.flatMap(el => el.data);
    performance.splice(0, 1, { value: 200, kind: "Cardio" });
    performance.splice(1, 1, { value: 240, kind: "Energie" });
    performance.splice(2, 1, { value: 80, kind: "Endurance" });
    performance.splice(3, 1, { value: 80, kind: "Force" });
    performance.splice(4, 1, { value: 220, kind: "Vitesse" });
    performance.splice(5, 1, { value: 110, kind: "Intensité" });
    
    return <article className="user-page__graph__left__bottom__radar-chart">
            <ResponsiveContainer width="100%" height="100%">
                    <RadarChart outerRadius={70} data={performance} >
                        <PolarGrid />
                        <PolarAngleAxis dataKey="kind" stroke="#fff" tickLine={false} ticks={false} tick={{ fontSize: 9 }} />
                        <Radar dataKey="value" stroke="rgba(230, 0, 0, 0)" fill="#e60000" fillOpacity={0.6} />
                        <Legend />
                    </RadarChart>
            </ResponsiveContainer>
        </article>
}

UserRadarChart.propTypes = {
    idParams: PropTypes.number,
    userPerformance: PropTypes.array,
    performance: PropTypes.array
};

export default UserRadarChart;

