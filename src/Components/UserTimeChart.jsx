import React, { useEffect, useState } from "react";
import { fetchURLs } from "../Services/fetchURLs";
import { useParams } from "react-router-dom";
import { LineChart, Line, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import CustomTooltipTime from './CustomToolTipTime';
import CustomCursorTime from './CustomCursorTime';
import PropTypes from 'prop-types';

function UserTimeChart() {
  const [userTime, setUserTime] = useState([]);
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
          setUserTime([...items[3].data.sessions])
        }
      })
      .catch(items => {
        if (mounted) {
          setError(items.message)
        }
      })
    return () => mounted = false;
  }, [idParams, error]);

  const arrayTimes = userTime.map(el => el.sessionLength);
  const min = Math.min(...arrayTimes) / 2;
  const max = Math.max(...arrayTimes) * 2;

  let timeData = userTime;
  timeData.splice(0, 1, { day: "L", sessionLength: 30 })
  timeData.splice(1, 1, { day: "M", sessionLength: 40 })
  timeData.splice(2, 1, { day: "M", sessionLength: 50 })
  timeData.splice(3, 1, { day: "J", sessionLength: 30 })
  timeData.splice(4, 1, { day: "V", sessionLength: 30 })
  timeData.splice(5, 1, { day: "S", sessionLength: 50 })
  timeData.splice(6, 1, { day: "D", sessionLength: 50 })
  

  return <article className="user-page__graph__left__bottom__time-chart">
    <h2 className="user-page__graph__left__bottom__time-chart__title">Durée moyenne des<br></br>sessions</h2>
    <ResponsiveContainer width="100%" height="100%">
    <LineChart width={200} height={200} data={timeData} margin={{ top: 5, right: 0, bottom: 0, left: 5 }}>
          <defs>
            <linearGradient id="lineColor" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.33)" />
              <stop offset="50%" stopColor="rgba(255, 255, 255, 0.66)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
        </defs>    
        <Line
                type="natural"
                dataKey="sessionLength"
                stroke="url(#lineColor)"
                strokeWidth={2}
                dot={false}
                activeDot={{
                  stroke: "rgba(255, 255, 255, 0.25)",
                  strokeWidth: 10,
                  r: 5,
                  fill: "#fff"
                }}
            />
            <Tooltip
                content={<CustomTooltipTime />}
                
                cursor={<CustomCursorTime />}
                
              />
            <XAxis
                dataKey={"day"}
                stroke="rgba(255, 255, 255, 0.5)"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12 }}
                padding={{ left: 10, right: 10 }}
            />

            <YAxis
                hide={true}
                domain={[min, max]}
            />
      </LineChart>
      </ResponsiveContainer>
    </article>
}

UserTimeChart.propTypes = {
  idParams: PropTypes.number,
  userTime: PropTypes.array
};

export default UserTimeChart;