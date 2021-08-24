import React from "react";
import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';
import PropTypes from "prop-types";

function UserScoreChart(props) {

    const userScore = props.data;
    const formatedScore = [
       { name: 'score', value: userScore*100, fill:"#e60000" }
        ];
  

    return <article className="user-page__graph__left__bottom__score-chart">
        <div className="user-page__graph__left__bottom__score-chart__background"></div>
        <div className="user-page__graph__left__bottom__score-chart__score">{userScore * 100}%</div>
        <div className="user-page__graph__left__bottom__score-chart__text">de votre<br></br>objectif</div>
        <ResponsiveContainer height="100%" width="100%">
                <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={80}
                    barSize={8}
                    data={formatedScore}
                    startAngle={-270}
                    endAngle={90}
                    >
                <PolarAngleAxis
                    type="number"
                    domain={[0, 100]}
                    angleAxisId={0}
                    tick={false}
                />
                
                <RadialBar
                    background={false}
                    clockWise={true}
                    dataKey="value"
                    cornerRadius={15}
                />
                <text
                    x={35}
                    y={25}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="progress-label"
                    >
                    Score
                </text>
                </RadialBarChart>
            </ResponsiveContainer>
         </article>
}

UserScoreChart.propTypes = {
    data: PropTypes.number
};

export default UserScoreChart;

