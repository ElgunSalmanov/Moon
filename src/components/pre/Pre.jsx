import { Link } from "react-router-dom";
import "./pre.scss";

function Pre() {
  return (
    <>
      <div className="pre">
        <h1 className="pre-title">Pre-Order Policy</h1>
        <p className="pre-content">
          The MOON UltraLight product is arriving soon but currently is not yet
          available to ship. You can purchase it as a pre-order, and the product
          will ship on or before the date indicated at the time of purchase.
          Certain factors may cause a delay in shipment, and in this instant,
          you will be notified and can decide to either keep or cancel your
          pre-order. Depending on the region you make your purchase in, you will
          either be charged $1.00 or 1 unit of the local currency. Authorization
          at checkout or the full payment amount will be charged at checkout. If
          you are charged the $1.00 or 1 unit of domestic currency
          authorization, you will be charged the remaining balance when your
          pre-order ships. To cancel before shipping, contact
          support@moonultra.com. If you cancel your pre-ordered or your credit
          card fails at the time of shipment, you will lose your priority
          position established when you made your pre-order purchase. For a full
          copy of our sales terms and conditions, please check out
          <br />
          <Link to="terms-of-use" className="pre-content-link">
            moonultra.com/terms-of-use.{" "}
          </Link>
        </p>
      </div>
    </>
  );
}

export default Pre;
