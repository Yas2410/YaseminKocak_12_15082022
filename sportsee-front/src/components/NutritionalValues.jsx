import propTypes from "prop-types";
import "../styles/values.css";

/**
 * @description React component to create nutritional values elements such as calories, proteins, carbs and fat
 * @property {function} NutritionalValues
 * @param { {img: SVGElement, name: string, quantity: string} } props
 * @returns {React.ReactElement} NutritionalValues component
 */
function NutritionalValues(props) {
  return (
    <div className="values">
      <img src={props.img} alt={props.name} />
      <div className="values-txt">
        <p className="values-qty">{props.quantity}</p>
        <p className="values-type">{props.name}</p>
      </div>
    </div>
  );
}

NutritionalValues.propTypes = {
  img: propTypes.node.isRequired,
  name: propTypes.string.isRequired,
  quantity: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
};

export default NutritionalValues;
