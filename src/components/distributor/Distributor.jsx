import { Link } from "react-router-dom";
import "./distributor.scss";

function Distributor() {
  return (
    <>
      <div className="distributor">
        <h1 className="distributor-title">Distributor</h1>
        <p className="distributor-content">
          Thanks for your interest in becoming an Authorised Moon Dealer! For
          inquiries on becoming a domestic or international dealer, please email{" "}
          <Link
            to="mailto:dist@moonultra.com?subject=Distributors%20Request"
            className="distributor-content-link"
          >
            dist@moonultra.com
          </Link>{" "}
          for more information.
        </p>
      </div>
    </>
  );
}

export default Distributor;
