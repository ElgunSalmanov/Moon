import logo from "../../assets/logo/moon-logo.svg";
import "./loading.scss";

function Loading() {
  return (
    <>
      <div className="loading">
        <div className="loading-high"></div>
        <div className="loading-logo">
          <img className="loading-logo-image" src={logo} alt="logo" />
        </div>
        <div className="loading-down"></div>
      </div>
    </>
  );
}

export default Loading;
