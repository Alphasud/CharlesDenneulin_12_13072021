import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import React, { useEffect, useState } from "react";
import { fetchURLs } from "../Services/fetchURLs";
import { useParams } from "react-router-dom";
import CustomizedLegendActivity from './CustomizedLegendActivity';
import CustomTooltipActivity from './CustomTooltipActivity';
import PropTypes from 'prop-types';

function UserActivityChart() {

  const [userActivity, setUserActivity] = useState([]);
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
          setUserActivity([items[1].data])
        }
      })
      .catch(items => {
        if (mounted) {
          setError(items.message)
        }
      })
    return () => mounted = false;
  }, [idParams, error]);

  const sessions = userActivity.flatMap(el => el.sessions);
  sessions.splice(0, 1, { day: "1", kilogram: 70, calories: 240 });
  sessions.splice(1, 1, { day: "2", kilogram: 69, calories: 220 });
  sessions.splice(2, 1, { day: "3", kilogram: 70, calories: 280 });
  sessions.splice(3, 1, { day: "4", kilogram: 70, calories: 500 });
  sessions.splice(4, 1, { day: "5", kilogram: 69, calories: 160 });
  sessions.splice(5, 1, { day: "6", kilogram: 69, calories: 162 });
  sessions.splice(6, 1, { day: "7", kilogram: 69, calories: 390 });

    let arrayKilo = [];
    let arrayCalories = [];
    let minKilo = 0;
    let maxKilo = 0;
    let minCalories = 0;
    let maxCalories = 0;
    
    arrayKilo = sessions.map(el => el.kilogram);
    arrayCalories = sessions.map(el => el.calories);
    minKilo = Math.min(...arrayKilo) - 1;
    maxKilo = Math.max(...arrayKilo) + 1;
    minCalories = Math.min(...arrayCalories) - 10;
    maxCalories = Math.max(...arrayCalories) + 10;
  
  return <article className="user-page__graph__left__activity-chart">
      <h2 className="user-page__graph__left__activity-chart__title">Activité quotidienne</h2>
    <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={sessions}
          margin={{
            top: 100,
            right: 0,
            left: 20,
            bottom: 20,
          }}
          barGap={10}
          barSize={10}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

                <XAxis
                    dataKey="day"
                    tickLine={false}
                    tick={{ fontSize: 14 }}
                    dy={15}
                />
                <YAxis
                    yAxisId="kilo"
                    orientation="right"
                    interval="number"
                    allowDecimals={false}
                    tickLine={false}
                    axisLine={false}
                    hide={false}
                    tick={{ fontSize: 14 }}
                    domain={[minKilo, maxKilo]}
                />
                <YAxis
                    yAxisId="cal"
                    hide={true}
                    domain={[minCalories, maxCalories]}
                />
                <Tooltip
                  cursor={{ fill: "#dfdfdf" }}
                  content={<CustomTooltipActivity />}
                />
        
                        <Legend
                          content={<CustomizedLegendActivity />}
                        />
                        <Bar
                            yAxisId="kilo"
                            dataKey="kilogram"
                            radius={[50, 50, 0, 0]}
                            fill="#000"
                        />
                        <Bar
                            yAxisId="cal"
                            dataKey="calories"
                            fill="#e60000"
                            radius={[50, 50, 0, 0]}
                        />
        </BarChart>
      </ResponsiveContainer>
    </article>
}

UserActivityChart.propTypes = {
  idParams: PropTypes.number,
  userActivity: PropTypes.array,
  sessions: PropTypes.array
};

export default UserActivityChart;