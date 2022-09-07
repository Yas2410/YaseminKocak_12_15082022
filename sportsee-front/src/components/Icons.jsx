import propTypes from "prop-types";

export default function Icons({ index, id, icon, alt }) {
  return (
    <img
      key={index}
      id={id}
      className="nutritionalVal-icon"
      src={icon}
      alt={alt}
    />
  );
}

Icons.propTypes = {
  key: propTypes.number,
  id: propTypes.string.isRequired,
  icon: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
};
