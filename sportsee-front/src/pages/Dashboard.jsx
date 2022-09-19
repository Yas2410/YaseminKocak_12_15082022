import React from "react";
import { useGetData } from "../hook/useGetData";
import propTypes from "prop-types";
import { useParams } from "react-router-dom";
import Informations from "../class/informationsClass";
import Activity from "../class/activityClass";
import AverageSessions from "../class/averageSessionsClass";
import Performance from "../class/performanceClass";
import Header from "../components/Header";
import Aside from "../components/Aside";
import Loader from "../components/Loader";
import DailyActivity from "../components/DailyActivity";
import Average from "../components/Average";
import Perf from "../components/Perf";
import DailyScore from "../components/DailyScore";
import NutritionalValues from "../components/NutritionalValues";
import Error from "../pages/Error";
import "../styles/dashboard.css";
import "../styles/values.css";
import caloriesIcon from "../assets/calories-icon.svg";
import proteinsIcon from "../assets/proteins-icon.svg";
import carbsIcon from "../assets/carbs-icon.svg";
import fatIcon from "../assets/fat-icon.svg";

function Dashboard(props) {
  const { id } = useParams("/");
  const {
    userData,
    userLoading,
    userError,
    activityData,
    activityLoading,
    activityError,
    averageData,
    averageLoading,
    averageError,
    perfData,
    perfLoading,
    perfError,
  } = useGetData(props.mock, id);

  //Classes / Formatage des données
  const userDataFormate = new Informations(userData);
  const activityDataFormate = new Activity(activityData);
  const averageDataFormate = new AverageSessions(averageData);
  const perfDataFormate = new Performance(perfData);
  //Si erreur sur l'ensemble de mes données : Afficher la page d'Erreur
  if (userError || activityError || averageError || perfError) {
    return <Error />;
  } else {
    //Pendant le chargement de mes données : Afficher le loader
    if (userLoading || activityLoading || averageLoading || perfLoading) {
      return <Loader />;
    } else {
      //Sinon, retourner l'ensemble de mes données
      return (
        <main>
          <header>
            <Header />
            <Aside />
          </header>
          <section className="dashboard-main">
            <div className="welcome-section">
              <h1 className="welcome-user">
                Bonjour{" "}
                <span className="username">
                  {userDataFormate.userInfos.firstName}
                </span>
              </h1>
              <h2 className="welcome-msg">
                Félicitations ! Vous avez explosé vos objectifs hier 👏
              </h2>
            </div>
            <section className="allDatas-section">
              <div className="charts-section">
                <div className="dailyActivity-chart">
                  <h3 className="dailyActivity-chart-title">
                    Activité quotidienne
                  </h3>
                  <DailyActivity data={activityDataFormate.sessions} />
                </div>
                <div className="averageSessions-chart">
                  <Average
                    data={averageDataFormate.sessions}
                    dates={activityDataFormate.sessions}
                  />
                </div>
                <div className="perf-chart">
                  <Perf
                    data={perfDataFormate.data}
                    category={perfDataFormate.kind}
                  />
                </div>
                <div className="dailyScore-chart">
                  <DailyScore data={userDataFormate} />
                </div>
              </div>
              <div className="nutritionalValues-section">
                <div className="nutritionalValues">
                  <NutritionalValues
                    img={caloriesIcon}
                    name="Calories"
                    quantity={userDataFormate.keyData.calorieCount + "kCal"}
                    type="calories"
                  />

                  <NutritionalValues
                    img={proteinsIcon}
                    name="Protéines"
                    quantity={userDataFormate.keyData.proteinCount + "g"}
                    type="proteins"
                  />

                  <NutritionalValues
                    img={carbsIcon}
                    name="Glucides"
                    quantity={userDataFormate.keyData.carbohydrateCount + "g"}
                    type="carbohydrates"
                  />

                  <NutritionalValues
                    img={fatIcon}
                    name="Lipides"
                    quantity={userDataFormate.keyData.lipidCount + "g"}
                    type="lipids"
                  />
                </div>
              </div>
            </section>
          </section>
        </main>
      );
    }
  }
}

Dashboard.propTypes = {
  mock: propTypes.bool.isRequired,
};

export default Dashboard;
