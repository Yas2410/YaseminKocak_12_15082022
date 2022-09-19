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
  Legend,
} from "recharts";
import "../styles/dailyActivity.css";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
    return (
      <ul className="customtooltip">
        <li className="customtooltip-kg">{`${payload[0].value} kg`}</li>
        <li className="customtooltip-kcal">{`${payload[1].value} kCal`}</li>
      </ul>
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
    <ResponsiveContainer height={250}>
      <BarChart
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 0,
        }}
        barGap={6}
        //Je récupère mes données
        data={data}
      >
        <CartesianGrid strokeDasharray="5 3" vertical={false} />
        <XAxis
          dataKey="day"
          stroke="#9B9EAC"
          tickLine={false}
          dy={10}
          style={{ fontSize: "14px" }}
        />
        <YAxis
          yAxisId="kg"
          dataKey="kilogram"
          orientation="right"
          stroke="#9B9EAC"
          axisLine={false}
          tickLine={false}
          type="number"
          domain={["dataMin-2", "dataMax+2"]}
          dx={20}
          style={{ fontSize: "14" }}
        />
        <YAxis
          yAxisId="kCal"
          datakey="calories"
          orientation="left"
          domain={["dataMin-60", "dataMax+60"]}
          hide={true}
        />
        <Tooltip content={CustomTooltip} />
        <Legend
          formatter={(value) => (
            <span className="dailyActivity-chart-legend">{value}</span>
          )}
          wrapperStyle={{
            top: -20,
            left: 0,
            fontSize: 14,
            fontWeight: "bold",
          }}
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={8}
        />
        <Bar
          dataKey="kilogram"
          yAxisId="kg"
          name="Poids (kg)"
          fill="#282D30"
          barSize={8}
          radius={[50, 50, 0, 0]}
        />
        <Bar
          dataKey="calories"
          yAxisId="kCal"
          name="Calories brûlées (kCal)"
          fill="#E60000"
          barSize={8}
          radius={[50, 50, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

DailyActivity.propTypes = {
  data: propTypes.array.isRequired,
};

export default DailyActivity;
