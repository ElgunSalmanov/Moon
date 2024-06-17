import Retail from "../../components/retail/Retail";
import { locations } from "../../utils/locations";

function Locations() {
  return (
    <>
      <div className="retail">
        <h1 className="retail-title">
          <span className="retail-title-text">Retail Locations</span> you’ll
          find MOON
        </h1>
        <p className="retail-content">b8ta</p>
        <div className="retail-containers">
          {locations.map((location) => (
            <Retail key={location.id} location={location} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Locations;
