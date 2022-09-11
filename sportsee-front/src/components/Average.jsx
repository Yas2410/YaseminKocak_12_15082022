import React from "react";
import propTypes from "prop-types";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import "../styles/average.css";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
    return (
      <div className="averageSess-toolTip">
        <p>{payload[0].value} min</p>
      </div>
    );
  } else {
    return null;
  }
};

function AverageSess(props) {
  const week = ["D", "L", "M", "M", "J", "V", "S"];
  const data = JSON.parse(JSON.stringify(props.data));
  const dates = JSON.parse(JSON.stringify(props.dates));
  // J'effectue une boucle for pour remplacer les n° des jours par leurs 1ère lettre
  //afin d'être cohérent avec la maquette figma du projet
  //+ la 1ère lettre est celle du jour actuel
  for (let i = 0; i < data.length; i++) {
    data[i].day = week[new Date(dates[i].day).getDay()];
  }

  return (
    <div className="average-sessions">
      <h3 className="averageSess-header">Durée moyenne des sessions</h3>
      <ResponsiveContainer height={165}>
        <LineChart
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          data={data}
        >
          <defs>
            <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="#EE7572" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#F5BFBD" }}
            dy={15}
          />
          <YAxis dataKey="sessionLength" hide={true} />
          <Tooltip
            content={CustomTooltip}
            cursor={{
              strokeLinecap: "square",
              stroke: "#000000",
              strokeOpacity: 0.1,
              strokeWidth: 50,
              height: 5000,
            }}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="url(#colorUv)"
            activeDot={{
              stroke: "#FFFFFF",
              strokeOpacity: 0.1,
              strokeWidth: 10,
              r: 4,
              fill: "#FFFFFF",
            }}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

AverageSess.propTypes = {
  data: propTypes.array.isRequired,
  dates: propTypes.array.isRequired,
};

export default AverageSess;
