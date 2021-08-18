import React, { useEffect, useState } from "react";
import { fetchURLs } from "../Services/fetchURLs";
import { useParams } from "react-router-dom";
import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';

function UserScoreChart() {

    const [userScore, setUserScore] = useState([]);
    const [error, setError] = useState([]);
    const idParams = useParams().id;
    
    useEffect(() => {
        let mounted = true;
        fetchURLs(idParams)
            .then(items => {
                if (mounted) {
                   items[0].data.todayScore ? setUserScore([items[0].data.todayScore]) : setUserScore([items[0].data.score]);
                }
            })
            .catch(items => {
                if (mounted) {
                    setError(items.message)
                }
            })
        return () => mounted = false;
    }, [idParams, error]);


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

export default UserScoreChart;

