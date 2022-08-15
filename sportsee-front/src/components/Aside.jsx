import yoga from "../assets/yoga-icon.svg";
import swim from "../assets/swim-icon.svg";
import bicycle from "../assets/bicyle-icon.svg";
import workout from "../assets/workout-icon.svg";
import "../styles/aside.css";

function Aside() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="aside-section">
      <a className="aside-btn" href="/">
        <img className="aside-icon" src={yoga} alt="Yoga icon" />
      </a>
      <a className="aside-btn" href="/">
        <img className="aside-icon" src={swim} alt="Swimming icon" />
      </a>
      <a className="aside-btn" href="/">
        <img className="aside-icon" src={bicycle} alt="Bicycle icon" />
      </a>
      <a className="aside-btn" href="/">
        <img className="aside-icon" src={workout} alt="Workout icon" />
      </a>
      <p className="aside-txt">Copyright, SportSee {currentYear}</p>
    </div>
  );
}

export default Aside;
