import "../styles/loader.css";

/**
 * @description React component rendering a loader while datas are loading
 * @property {function} Loader
 * @returns { React.ReactElement } Loader component
 */

function Loader() {
  return (
    <div className="loader-center">
      <div className="loading-page"></div>
    </div>
  );
}

export default Loader;
