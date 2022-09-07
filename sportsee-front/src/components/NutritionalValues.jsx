import propTypes from "prop-types";
import { useFetch } from "../hook/useFetch";
import { useParams } from "react-router-dom";
import Informations from "../class/informationsClass";

import caloriesIcon from "../assets/calories-icon.svg";
import proteinsIcon from "../assets/proteins-icon.svg";
import carbsIcon from "../assets/carbs-icon.svg";
import fatIcon from "../assets/fat-icon.svg";

import KeyData from "./UserDatas";
import Icons from "./Icons";

import "../styles/values.css";

export default function NutritionalValues(userId) {
  userId = useParams().id;
  const { data, loading, error } = useFetch(`${userId}.json`);
  const dataFormate = new Informations(data);
  const userInfos = dataFormate.keyData;

  function getUserData(index) {
    if (!loading) {
      return Object.values(userInfos)[index];
    }
  }

  const nutritionalValIcons = [caloriesIcon, proteinsIcon, carbsIcon, fatIcon];
  const nutritionCategory = ["Calories", "Protéines", "Glucides", "Lipides"];

  return (
    <div className="nutritionalVal-section">
      {loading ? (
        <p className="loading-msg">...</p>
      ) : error ? (
        <div className="error-msg">Oups ! Aucune donnée trouvée...</div>
      ) : dataFormate ? (
        <aside className="nutritionalVal-aside">
          {nutritionalValIcons.map((icon, index) => (
            <div key={index} className="nutritionalVal-content">
              <Icons
                id={"icon-" + nutritionCategory[index]}
                icon={icon}
                alt={"icone " + nutritionCategory[index]}
              />
              <KeyData
                keyData={getUserData(index)}
                unit={index === 0 ? "kCal" : "g"}
                nutritionCategory={nutritionCategory[index]}
              />
            </div>
          ))}
        </aside>
      ) : null}
    </div>
  );
}

NutritionalValues.propTypes = {
  userId: propTypes.string,
  nutritionalValIcons: propTypes.string,
  nutritionCategory: propTypes.string,
  icon: propTypes.string,
  index: propTypes.number,
  keyData: propTypes.objectOf(propTypes.number),
};
