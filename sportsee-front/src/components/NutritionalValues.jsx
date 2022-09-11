import propTypes from "prop-types";
import "../styles/values.css";

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
