import React from "react";
import propTypes from "prop-types";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import "../styles/dailyScore.css";

function DailyScore(props) {
  const data = JSON.parse(JSON.stringify(props.data));

  //Puisque dans l'API, les deux mentions sont utilisées (todayScore / score)
  //Il faut prendre en compte toutes les données
  const score = data.todayScore || data.score;
  const scoreValue = [{ value: score }, { value: 1 - score }];

  return (
    <>
      <h3 className="dailyScore-chart-title">Score</h3>
      <ResponsiveContainer>
        <PieChart className="pieChart-style">
          <Pie
            //Je récupère mes données
            data={scoreValue}
            dataKey="value"
            startAngle={100}
            endAngle={-200}
            innerRadius="70%"
            outerRadius="80%"
            cornerRadius="50%"
          >
            <Cell fill="#FF0000" stroke="#e60000" />
            <Cell fill="transparent" stroke="transparent" />
          </Pie>

          <Pie
            data={[{ name: "circle", value: 100 }]}
            dataKey="value"
            startAngle={210}
            endAngle={-210}
            outerRadius="70%"
            fill="white"
          />
        </PieChart>
      </ResponsiveContainer>

      <p className="dailyScore-chart-result">{score * 100}%</p>
      <p className="dailyScore-chart-lgd">
        de votre <br /> objectif
      </p>
    </>
  );
}

//{score * 100}% : Conversion de la data récupérée en %
// exemple : 0.12 devient 12%

DailyScore.propTypes = {
  data: propTypes.object.isRequired,
};

export default DailyScore;
