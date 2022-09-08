import React from "react";
import { useGetData } from "../hook/useGetData";
import propTypes from "prop-types";
import { useParams } from "react-router-dom";
import Informations from "../class/informationsClass";
import Loader from "../components/Loader";
import Activity from "../components/Activity";
import AverageSess from "../components/Average";
import NutritionalValues from "../components/NutritionalValues";
import Error from "../pages/Error";
import "../styles/dashboard.css";

function Dashboard(props) {
  const { id } = useParams("/");
  const {
    userData,
    userLoading,
    userError,
    activityLoading,
    activityError,
    averageLoading,
    averageError,
    perfLoading,
    perfError,
  } = useGetData(props.mock, id);
  const dataFormate = new Informations(userData);

  if (userError || activityError || averageError || perfError) {
    return <Error />;
  } else {
    if (userLoading || activityLoading || averageLoading || perfLoading) {
      return <Loader />;
    } else {
      let userIdentity = dataFormate.userInfos.firstName;

      return (
        <div>
          <header className="">
            <div className="dashboard-main">
              <h1 className="welcome-user">
                Bonjour <span className="username">{userIdentity}</span>
              </h1>
              <h2 className="welcome-msg">
                Félicitations ! Vous avez explosé vos objectifs hier 👏
              </h2>
            </div>
          </header>
          <section className="charts-main">
            <Activity />
            <AverageSess />
            <NutritionalValues />
          </section>
        </div>
      );
    }
  }
}

Dashboard.propTypes = {
  mock: propTypes.bool.isRequired,
};

export default Dashboard;
