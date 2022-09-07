import propTypes from "prop-types";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useFetch } from "../hook/useFetch";
import { useParams } from "react-router-dom";
import AverageSessions from "../class/averageSessionsClass";
import "../styles/average.css";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
    return (
      <div className="averageSess-results">
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  } else {
    return null;
  }
};

export default function AverageSess(userId) {
  userId = useParams().id;
  const { data, loading, error } = useFetch(`${userId}/average-sessions.json`);
  const dataFormate = new AverageSessions(data);
  const averageSess = dataFormate.sessions;

  function getAverage() {
    if (!loading) {
      averageSess.forEach((item, index) => {
        item.day = new Date();

        item.day.setDate(item.day.getDate() - index);

        const options = {
          year: "2-digit",
          month: "2-digit",
          day: "2-digit",
          weekday: "narrow",
        };

        item.day = new Intl.DateTimeFormat("fr", options).format(item.day);

        item.day = item.day[0];
      });
      return averageSess.reverse();
    }
  }
  //GRAPH 2 : AVERAGE SESSIONS / WEEK
  return (
    <div className="average-sessions">
      <h3 className="averageSess-header">Durée moyenne des sessions</h3>
      <ResponsiveContainer height={165}>
        {loading ? (
          <p className="loading-msg">...</p>
        ) : error ? (
          <div className="error-msg">Oups ! Aucune donnée trouvée...</div>
        ) : dataFormate ? (
          <LineChart
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            data={getAverage()}
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
              tick={{ fontSize: 18, fill: "#F5BFBD" }}
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
        ) : null}
      </ResponsiveContainer>
    </div>
  );
}

AverageSess.propTypes = {
  userId: propTypes.string,
};

CustomTooltip.propTypes = {
  active: propTypes.bool,
  payload: propTypes.array,
};
