import propTypes from "prop-types";
import { useFetch } from "../hook/useFetch";
import { useParams } from "react-router-dom";
import Informations from "../class/informationsClass";
import "../styles/welcomeUser.css";

export default function WelcomeUser(userId) {
  userId = useParams().id;

  const { data, loading, error } = useFetch(`${userId}.json`);

  const dataFormate = new Informations(data);

  return (
    <header className="">
      {loading ? (
        <p className="">...</p>
      ) : error ? (
        <p className="">erreur</p>
      ) : dataFormate ? (
        <div className="dashboard-main">
          <h1 className="welcome-user">
            Bonjour{" "}
            <span className="username">{dataFormate.userInfos.firstName}</span>
          </h1>
          <h2 className="welcome-msg">
            Félicitations ! Vous avez explosé vos objectifs hier 👏
          </h2>
        </div>
      ) : null}
    </header>
  );
}

WelcomeUser.propTypes = {
  userId: propTypes.number,
};
