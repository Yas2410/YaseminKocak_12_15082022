import React from "react";
import propTypes from "prop-types";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";
import "../styles/perf.css";

/**
 * @description React component to create a radar chart using Recharts
 * @property {function} Perf
 * @param { {data: Array, axisTitles: Array} } props
 * @returns { React.ReactElement } Perf component
 */
function Perf(props) {
  const data = JSON.parse(JSON.stringify(props.data));

  const category = JSON.parse(JSON.stringify(props.category));
  const category_translate = {
    cardio: "Cardio",
    energy: "Energie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
  };

  //Convertion de l'anglais au français
  for (let i = 0; i < data.length; i++) {
    data[i].kind = category_translate[category[data[i].kind]];
  }

  return (
    <ResponsiveContainer>
      <RadarChart outerRadius={70} data={data}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          domain={[0, 250]}
          dy={5}
          tickLine={false}
          stroke="white"
        />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

Perf.propTypes = {
  data: propTypes.array.isRequired,
  category: propTypes.object.isRequired,
};

export default Perf;
