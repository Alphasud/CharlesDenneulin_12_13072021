import { Radar, RadarChart, PolarGrid, PolarAngleAxis, Legend, ResponsiveContainer } from 'recharts';
import React from "react";
import PropTypes from "prop-types";


function UserRadarChart(props) {

    const performance = props.data;
    /* Manually updating values in the object to match mockup design */
    for (let x = 0; x < performance.length; x++) {
    performance[0].kind = "Cardio";
    performance[1].kind = "Energie";
    performance[2].kind = "Endurance";
    performance[3].kind = "Force";
    performance[4].kind = "Vitesse";
    performance[5].kind = "Intensité";
  };
    
    return <article className="user-page__graph__left__bottom__radar-chart">
{/** https://recharts.org/en-US/api/ResponsiveContainer */}   
            <ResponsiveContainer width="100%" height="100%">
{/** https://recharts.org/en-US/api/RadarChart */}   
                <RadarChart outerRadius={70} data={performance} >
{/** https://recharts.org/en-US/api/PolarGrid */}
                    <PolarGrid />
{/** https://recharts.org/en-US/api/PolarAngleAxis */}
                    <PolarAngleAxis dataKey="kind" stroke="#fff" tickLine={false} ticks={false} tick={{ fontSize: 9 }} />
{/** https://recharts.org/en-US/api/Radar */}
                    <Radar dataKey="value" stroke="rgba(230, 0, 0, 0)" fill="#e60000" fillOpacity={0.6} />
{/** https://recharts.org/en-US/api/Legend */}
                    <Legend />
                </RadarChart>
            </ResponsiveContainer>
        </article>
}

UserRadarChart.propTypes = {
    data: PropTypes.array
};

export default UserRadarChart;

