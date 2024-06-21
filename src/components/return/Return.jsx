import "./return.scss";

function Return() {
  return (
    <>
      <div className="return">
        <h1 className="return-title">Returns</h1>
        <div className="return-container">
          <p className="return-container-content">
            We appreciate your customer loyalty and will make sure we do
            whatever we can to make your experience a great one. If you are not
            fully satisfied with your order, the item(s) can be returned within
            30 days of the delivery date for a refund or store credit (excluding
            original shipping costs*).{" "}
            <span className="return-container-content-text">
              Please ensure your MOON UltraLight
            </span>{" "}
            is in unused condition with the original packaging still intact. If
            the returned item looks used, we cannot restock it, and your request
            for a refund or store credit will not be processed. The original
            item will be returned to you.
          </p>
          <i className="return-container-content">
            *Original shipping charges are non-refundable except in cases where
            we have made a shipping error.
          </i>
          <p className="return-container-content">
            Please allow one week for your return to be fully processed and a
            refund or store credit or exchange to be issued.
          </p>
        </div>
      </div>
    </>
  );
}

export default Return;
