import React from "react";
import { LineChart, Line, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import CustomTooltipTime from './CustomToolTipTime';
import CustomCursorTime from './CustomCursorTime';
import PropTypes from 'prop-types';

function UserTimeChart(props) {
/* Manually updating values in the object to match mockup design */
  for (let x = 0; x < props.data.length; x++) {
    props.data[0].day = "L";
    props.data[1].day = "M";
    props.data[2].day = "M";
    props.data[3].day = "J";
    props.data[4].day = "V";
    props.data[5].day = "S";
    props.data[6].day = "D";
  };

  const arrayTimes = props.data.map(el => el.sessionLength);
  const max = Math.max(...arrayTimes) * 2;

  return <article className="user-page__graph__left__bottom__time-chart">
    <h2 className="user-page__graph__left__bottom__time-chart__title">Durée moyenne des<br></br>sessions</h2>
{/* https://recharts.org/en-US/api/ResponsiveContainer */}
    <ResponsiveContainer width="100%" height="100%">
{/* https://recharts.org/en-US/api/LineChart */}
    <LineChart width={200} height={200} data={props.data} margin={{ top: 5, right: 0, bottom: 0, left: 5 }}>
        <defs>
{/* https://github.com/recharts/recharts/issues/407 */}
            <linearGradient id="lineColor" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.33)" />
              <stop offset="50%" stopColor="rgba(255, 255, 255, 0.66)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
        </defs>
{/* https://recharts.org/en-US/api/Line */}
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
{/* https://recharts.org/en-US/api/Tooltip */}
          <Tooltip
              content={<CustomTooltipTime />}
              cursor={<CustomCursorTime />}
            />
{/*  https://recharts.org/en-US/api/XAxis */}
            <XAxis
                dataKey={"day"}
                stroke="rgba(255, 255, 255, 0.5)"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12 }}
                padding={{ left: 10, right: 10 }}
            />
{/* https://recharts.org/en-US/api/YAxis */}
            <YAxis
                hide={true}
                domain={[-10, max]}
            />
      </LineChart>
      </ResponsiveContainer>
    </article>
}

UserTimeChart.propTypes = {
    data: PropTypes.array
};

export default UserTimeChart;