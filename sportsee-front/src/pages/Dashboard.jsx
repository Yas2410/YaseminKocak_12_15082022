import { useFetch } from "../hook/useFetch";
import { useParams } from "react-router-dom";
import WelcomeUser from "../components/WelcomeUser";
import Activity from "../components/Activity";
import "../styles/dashboard.css";
import AverageSess from "../components/Average";
import NutritionalValues from "../components/NutritionalValues";

export default function Dashboard(userId) {
  userId = useParams().id;
  const { data, loading } = useFetch(`${userId}.json`);

  return (
    <>
      {loading ? (
        <div></div>
      ) : data ? (
        <>
          <WelcomeUser />
          <section className="charts-main">
            <Activity />
            <AverageSess />
            <NutritionalValues />
          </section>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
}
