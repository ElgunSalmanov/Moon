import { Link } from "react-router-dom";
import right from "../../assets/icon/right.svg";
import up from "../../assets/icon/up.svg";
import instagram from "../../assets/icon/instagram.svg";
import facebook from "../../assets/icon/facebook.svg";
import twitter from "../../assets/icon/twitter.svg";
import pinterest from "../../assets/icon/pinterest.svg";
import linkedin from "../../assets/icon/linkedin.svg";
import youtube from "../../assets/icon/youtube.svg";
import "./footer.scss";

function Footer() {
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer id="footer">
        <div className="first">
          <Link to="/contact" className="first-get">
            Get in Touch{" "}
            <img className="first-get-right" src={right} alt="right arrow" />
          </Link>
          <button onClick={handleTop} className="first-back">
            Back to Top{" "}
            <img className="first-back-up" src={up} alt="up arrow" />
          </button>
          <ul className="first-social">
            <Link
              to="https://www.instagram.com/mymoonultra/"
              target="_blank"
              className="first-social-link"
            >
              <img src={instagram} alt="instagram" />
            </Link>
            <Link
              to="https://www.instagram.com/moonselfie/"
              target="_blank"
              className="first-social-link"
            >
              <img src={facebook} alt="facebook" />
            </Link>
            <Link
              to="https://twitter.com/mymoonultra"
              target="_blank"
              className="first-social-link"
            >
              <img src={twitter} alt="twitter" />
            </Link>
            <Link
              to="https://www.pinterest.com/moonultra/"
              target="_blank"
              className="first-social-link"
            >
              <img src={pinterest} alt="pinterest" />
            </Link>
            <Link
              to="https://www.linkedin.com/company/mymoonultra/"
              target="_blank"
              className="first-social-link"
            >
              <img src={linkedin} alt="linkedin" />
            </Link>
            <Link
              to="https://www.youtube.com/channel/UCGDkJCwXRpwYYYXqVJgx1lQ"
              target="_blank"
              className="first-social-link"
            >
              <img src={youtube} alt="youtube" />
            </Link>
          </ul>
        </div>
        <div className="second">
          <ul className="second-directions">
            <li className="second-directions-title">Shop moon</li>
            <Link to="/shop" className="second-directions-link">
              Pre-Order Now
            </Link>
            <Link to="/where-to-buy" className="second-directions-link">
              Where to Buy
            </Link>
          </ul>
          <ul className="second-directions">
            <li className="second-directions-title">About moon</li>
            <Link to="/terms-of-use" className="second-directions-link">
              Terms of Use
            </Link>
            <Link to="/privacy-policy" className="second-directions-link">
              Privacy Policy
            </Link>
            <Link to="/limited-warranty" className="second-directions-link">
              Warranty Policy
            </Link>
          </ul>
          <ul className="second-directions">
            <li className="second-directions-title">Support</li>
            <Link to="/pre-order-policy" className="second-directions-link">
              Pre-Order Policy
            </Link>
            <Link to="/returns" className="second-directions-link">
              Returns
            </Link>
            <Link to="/shipping" className="second-directions-link">
              Shipping
            </Link>
          </ul>
          <ul className="second-directions">
            <li className="second-directions-title">Contact us</li>
            <Link to="/chat" className="second-directions-link">
              Live Chat
            </Link>
            <Link
              to="mailto:support@moonselfie.me?subject=Support%20Email%20Query%20"
              className="second-directions-link"
            >
              support@moonselfie.me
            </Link>
            <Link to="tel:(512)887-4055" className="second-directions-link">
              (512) 887-4055
            </Link>
          </ul>
          <ul className="second-directions">
            <li className="second-directions-title">Partner</li>
            <Link to="/distributors" className="second-directions-link">
              Distributors
            </Link>
          </ul>
          <form className="second-form">
            <p className="second-form-title">SIGN UP</p>
            <p className="second-form-content">
              Don’t miss out on exclusive offers, moments and stories.
            </p>
            <div className="second-form-container">
              <label className="second-form-container-label" htmlFor="email">
                Your Email
              </label>
              <input
                className="second-form-container-input"
                type="email"
                id="email"
                name="email"
              />
            </div>
            <button className="second-form-button">Sign Up</button>
          </form>
        </div>
        <div className="thirth">
          <p className="thirth-content">
            ® 2024 MOON Selfiie. All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
