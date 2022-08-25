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
import { useFetch } from "../hook/useFetch";
import { useParams } from "react-router-dom";
import Activity from "../class/activityClass";
import "../styles/activity.css";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
    return (
      <div className="dailyAct-results">
        <p>{`${payload[0].value} kCal`}</p>
        <p>{`${payload[1].value} Kg`}</p>
      </div>
    );
  } else {
    return null;
  }
};

/*Si je veux que les dates correspondent aux dates actuelles : 
Insérer la fonction ci-après dans DailyActivity :
 function getActivity() {
    if (!loading) {
      activity.forEach((item, index) => {
        item.day = new Date();
        item.day.setDate(item.day.getDate() - index);

        const options = {
          month: "2-digit",
          day: "2-digit",
        };
        item.day = new Intl.DateTimeFormat("fr", options).format(item.day);
      });
      return activity.reverse();
    }
  }
+ Je n'oublie pas de modifier la partie "data" de mon BARCHART
*/

export default function DailyActivity(userId) {
  userId = useParams().id;
  const { data, loading, error } = useFetch(`${userId}/activity.json`);
  const dataFormate = new Activity(data);
  const activity = dataFormate.sessions;

  //GRAPH 1 : DAILY ACTIVITY
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
        {loading ? (
          <p className="loading-msg">...</p>
        ) : error ? (
          <div className="error-msg">Oups ! Aucune donnée trouvée...</div>
        ) : dataFormate ? (
          <BarChart
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 30,
            }}
            barGap={5}
            //Je récupère mes données
            //Si dates actuelles : data={getActivity()}
            data={activity}
          >
            <XAxis
              dataKey="day"
              stroke="#9B9EAC"
              tickLine={false}
              style={{ fontSize: "14px" }}
            />
            <YAxis
              yAxisId="poids"
              stroke="#9B9EAC"
              orientation="right"
              axisLine={false}
              tickLine={false}
              tickCount="3"
              type="number"
              dataKey="kilogram"
              domain={["dataMin -2", "dataMax + 1"]}
              style={{ fontSize: "14px" }}
            />
            <YAxis
              yAxisId="calories"
              thick={false}
              orientation="left"
              axisLine={false}
              tickLine={false}
              dataKey="calories"
              domain={["dataMin -10", "dataMax + 10"]}
            />
            <Tooltip
              dy={4}
              content={<CustomTooltip />}
              cursor={{ fill: "#C4C4C480" }}
            />
            <CartesianGrid stroke="#DEDEDE" vertical={false} />

            <Bar
              yAxisId="calories"
              name="Calories brûlées (kCal)"
              dataKey="calories"
              fill="#000"
              barSize={8}
              radius={[50, 50, 0, 0]}
            />
            <Bar
              yAxisId="poids"
              name="Poids (kg)"
              dataKey="kilogram"
              fill="#FF0000"
              barSize={8}
              radius={[50, 50, 0, 0]}
            />
          </BarChart>
        ) : null}
      </ResponsiveContainer>
    </div>
  );
}

DailyActivity.propTypes = {
  userId: propTypes.string,
};

CustomTooltip.propTypes = {
  active: propTypes.bool,
  payload: propTypes.array,
};

/*
SI INTEGRE DANS LE BARCHART :
<Legend
  width={"60%"}
  iconType={"circle"}
  iconSize={"10px"}
  wrapperStyle={{
    top: "-15%",
    right: "10px",
    lineHeight: "40px",
    }}
/>
*/
