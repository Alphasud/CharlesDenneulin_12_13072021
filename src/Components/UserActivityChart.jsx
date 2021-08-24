import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import CustomizedLegendActivity from './CustomizedLegendActivity';
import CustomTooltipActivity from './CustomTooltipActivity';
import PropTypes from 'prop-types';

function UserActivityChart(props) {

  
  const sessions = props.data;
  /* Manually updating values in the object to match mockup design */
  for (let x = 0; x < sessions.length; x++) {
    sessions[0].day = "1";
    sessions[1].day = "2";
    sessions[2].day = "3";
    sessions[3].day = "4";
    sessions[4].day = "5";
    sessions[5].day = "6";
    sessions[6].day = "7";
  };

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
{/** https://recharts.org/en-US/api/ResponsiveContainer */} 
      <ResponsiveContainer width="100%" height="100%">
{/** https://recharts.org/en-US/api/BarChart */}
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
{/** https://recharts.org/en-US/api/CartesianGrid */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
{/** https://recharts.org/en-US/api/XAxis */}    
            <XAxis
              dataKey="day"
              tickLine={false}
              tick={{ fontSize: 14 }}
              dy={15}
            />
{/** https://recharts.org/en-US/api/YAxis */}
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
{/** https://recharts.org/en-US/api/Tooltip */}
            <Tooltip
              cursor={{ fill: "#dfdfdf" }}
              content={<CustomTooltipActivity />}
            />
{/** https://recharts.org/en-US/api/Legend */}        
            <Legend
              content={<CustomizedLegendActivity />}
            />
{/** https://recharts.org/en-US/api/Bar */}
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
    data: PropTypes.array
};

export default UserActivityChart;