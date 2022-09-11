import React from "react";
import { useGetData } from "../hook/useGetData";
import propTypes from "prop-types";
import { useParams } from "react-router-dom";
import Informations from "../class/informationsClass";
import Activity from "../class/activityClass";
import AverageSessions from "../class/averageSessionsClass";
import Header from "../components/Header";
import Aside from "../components/Aside";
import Loader from "../components/Loader";
import DailyActivity from "../components/DailyActivity";
import Average from "../components/Average";
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
    perfLoading,
    perfError,
  } = useGetData(props.mock, id);

  const userDataFormate = new Informations(userData);
  //console.log(userDataFormate.todayScore, "userData");
  const activityDataFormate = new Activity(activityData);
  const averageDataFormate = new AverageSessions(averageData);

  if (userError || activityError || averageError || perfError) {
    return <Error />;
  } else {
    if (userLoading || activityLoading || averageLoading || perfLoading) {
      return <Loader />;
    } else {
      return (
        <div>
          <header className="">
            <Header />
            <Aside />
            <div className="dashboard-main">
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
          </header>
          <section className="charts-main">
            <DailyActivity data={activityDataFormate.sessions} />
            <Average
              data={averageDataFormate.sessions}
              dates={activityDataFormate.sessions}
            />
          </section>
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
      );
    }
  }
}

Dashboard.propTypes = {
  mock: propTypes.bool.isRequired,
};

export default Dashboard;
