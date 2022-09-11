import React from "react";
import propTypes from "prop-types";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import "../styles/dailyActivity.css";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
    return (
      <div className="dailyAct-toolTip">
        <p>{payload[0].value}kg</p>
        <p>{payload[1].value}kCal</p>
      </div>
    );
  } else {
    return null;
  }
};

function DailyActivity(props) {
  const data = JSON.parse(JSON.stringify(props.data));
  // J'effectue une boucle for pour remplacer les dates par des chiffres
  //afin d'être cohérent avec la maquette figma du projet
  for (let i = 0; i < data.length; i++) {
    data[i].day = i + 1;
  }

  return (
    <div className="daily-activity">
      <div className="dailyAct-header">
        <h3 className="dailyAct-ttl">Activité quotidienne</h3>
        <div className="dailyAct-legend">
          <li className="second-lgd"> Poids (Kg) </li>
          <li className="first-lgd"> Calories brûlées (kCal) </li>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 35,
          }}
          barGap={5}
          //Je récupère mes données
          data={data}
        >
          <XAxis
            dataKey="day"
            stroke="#9B9EAC"
            tickLine={false}
            style={{ fontSize: "14px" }}
          />
          <YAxis
            yAxisId="kg"
            stroke="#9B9EAC"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tickCount="3"
            type="number"
            dataKey="kilogram"
            domain={["dataMin-2", "dataMax+2"]}
            style={{ fontSize: "14" }}
          />
          <YAxis
            yAxisId="kCal"
            thick={false}
            orientation="left"
            axisLine={false}
            tickLine={false}
            datakey="calories"
            domain={["dataMin-10", "dataMax+10"]}
            hide={true}
          />
          <Tooltip content={CustomTooltip} cursor={{ fill: "#C4C4C480" }} />
          <CartesianGrid stroke="#DEDEDE" vertical={false} />
          <Bar
            dataKey="kilogram"
            yAxisId="kg"
            name="Poids (kg)"
            fill="#FF0000"
            barSize={8}
            radius={[50, 50, 0, 0]}
          />
          <Bar
            dataKey="calories"
            yAxisId="kCal"
            name="Calories brûlées (kCal)"
            fill="#000"
            barSize={8}
            radius={[50, 50, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

DailyActivity.propTypes = {
  data: propTypes.array.isRequired,
};

export default DailyActivity;
