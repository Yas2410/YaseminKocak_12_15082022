import propTypes from "prop-types";

export default function KeyData({ keyData, unit, nutritionCategory, index }) {
  return (
    <ul>
      <li key={index}>{keyData + " " + unit}</li>
      <li key={nutritionCategory}>{nutritionCategory}</li>
    </ul>
  );
}

KeyData.propTypes = {
  keyData: propTypes.number,
  unit: propTypes.string.isRequired,
  nutritionCategory: propTypes.string.isRequired,
  index: propTypes.number,
};
