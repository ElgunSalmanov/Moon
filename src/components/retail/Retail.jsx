import "./retail.scss";

function Retail({ location }) {
  return (
    <>
      <div className="retail-containers-container">
        <h3 className="retail-containers-container-title">{location.state}</h3>
        <ul className="retail-containers-container-list">
          <li className="retail-containers-container-list-item">
            {location.adressFirst}
          </li>
          <li className="retail-containers-container-list-item">
            {location.adressSecond}
          </li>
          <li className="retail-containers-container-list-item">
            {location.adressThirth}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Retail;
