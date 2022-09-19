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
      <span className="customtooltip-min">{`${payload[0].value} min`}</span>
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
  for (let i = 0; i < data.length; i++) {
    data[i].day = week[new Date(dates[i].day).getDay()];
  }

  return (
    <div>
      <h3 className="averageSessions-chart-title">
        Durée moyenne des sessions
      </h3>
      <ResponsiveContainer height={200}>
        <LineChart
          margin={{
            top: 10,
            right: 20,
            left: 20,
            bottom: 20,
          }}
          //Je récupère mes données
          data={data}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 14, fill: "#F5BFBD" }}
            dy={10}
          />
          <YAxis dataKey="sessionLength" hide={true} />
          <Tooltip
            content={CustomTooltip}
            cursor={{
              strokeLinecap: "square",
              stroke: "#000000",
              strokeOpacity: 0.1,
              strokeWidth: 50,
            }}
          />
          <Line
            dataKey="sessionLength"
            type="monotone"
            stroke="rgba(255, 255, 255, 0.9)"
            strokeWidth={1}
            dot={false}
            activeDot={{
              stroke: "rgba(255,255,255, 0.6)",
              strokeWidth: 5,
              r: 5,
            }}
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
