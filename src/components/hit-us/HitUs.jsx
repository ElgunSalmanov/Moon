import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import chat from "../../assets/icon/chat.svg";
import mail from "../../assets/icon/mail.svg";
import support from "../../assets/icon/support.svg";
import close from "../../assets/icon/close.png";
import instagram from "../../assets/icon/instagram.svg";
import facebook from "../../assets/icon/facebook.svg";
import twitter from "../../assets/icon/twitter.svg";
import pinterest from "../../assets/icon/pinterest.svg";
import linkedin from "../../assets/icon/linkedin.svg";
import youtube from "../../assets/icon/youtube.svg";
import "./hitus.scss";

function HitUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [open, setOpen] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  const validateName = (name) => {
    if (!/^[A-Za-z\s]*$/.test(name.target.value) && name.target.value !== "") {
      setNameError("First name must contain only letters");
      setDisabled(true);
    } else if (name.target.value.length < 3 && name.target.value !== "") {
      setNameError("First name must be at least 3 characters");
      setDisabled(true);
    } else {
      setNameError("");
      setDisabled(false);
    }

    setName(name.target.value);
  };

  const validateEmail = (email) => {
    if (!/\S+@\S+\.\S+/.test(email.target.value) && email.target.value !== "") {
      setEmailError("Invalid email address");
      setDisabled(true);
    } else {
      setEmailError("");
      setDisabled(false);
    }

    setEmail(email.target.value);
  };

  const validatePhone = (phone) => {
    if (!/^\d{10}$/.test(phone.target.value) && phone.target.value !== "") {
      setPhoneError("The phone number must consist of 10 digits!");
    } else {
      setPhoneError("");
    }

    setPhone(phone.target.value);
  };

  const validateMessage = (message) => {
    if (message.target.value.length < 10 && message.target.value !== "") {
      setMessageError("Message must be at least 10 characters");
      setDisabled(true);
    } else {
      setMessageError("");
      setDisabled(false);
    }

    setMessage(message.target.value);
  };

  const handleClose = () => {
    setOpen(!open);

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  useEffect(() => {
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      message === "" ||
      nameError ||
      emailError ||
      phoneError ||
      messageError
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [
    name,
    email,
    phone,
    message,
    nameError,
    emailError,
    phoneError,
    messageError,
  ]);

  return (
    <>
      <div
        className="hitus"
        style={
          open
            ? { animation: "topping 1s ease-in-out" }
            : { animation: "bottoming 1s ease-in-out" }
        }
      >
        <div className="hitus-head">
          <img
            className="hitus-head-close"
            onClick={handleClose}
            src={close}
            alt="close"
          />
        </div>
        <div className="hitus-main">
          <div className="hitus-main-social">
            <h1 className="hitus-main-social-title">Hit us up-</h1>
            <ul className="hitus-main-social-list">
              <li className="hitus-main-social-list-item">
                <img
                  className="hitus-main-social-list-item-image"
                  src={chat}
                  alt="chat"
                />
                <Link to="/chat" className="hitus-main-social-list-item-link">
                  Live chat
                </Link>
              </li>
              <li className="hitus-main-social-list-item">
                <img
                  className="hitus-main-social-list-item-image"
                  src={support}
                  alt="support"
                />
                <p className="hitus-main-social-list-item-link">Support</p>
              </li>
              <li className="hitus-main-social-list-item">
                <img
                  className="hitus-main-social-list-item-image"
                  src={mail}
                  alt="mail"
                />
                <Link
                  to="mailto:support@moonselfie.me?subject=Support%20Email%20Query%20"
                  className="hitus-main-social-list-item-link pad-top"
                >
                  support@moonselfie.me
                </Link>
              </li>
            </ul>
            <div className="hitus-main-social-navigation">
              <ul className="hitus-main-social-navigation-list">
                <Link
                  to="https://www.instagram.com/mymoonultra/"
                  target="_blank"
                  className="hitus-main-social-navigation-list-link"
                >
                  <img src={instagram} alt="instagram" />
                </Link>
                <Link
                  to="https://www.instagram.com/moonselfie/"
                  target="_blank"
                  className="hitus-main-social-navigation-list-link"
                >
                  <img src={facebook} alt="facebook" />
                </Link>
                <Link
                  to="https://twitter.com/mymoonultra"
                  target="_blank"
                  className="hitus-main-social-navigation-list-link"
                >
                  <img src={twitter} alt="twitter" />
                </Link>
                <Link
                  to="https://www.pinterest.com/moonultra/"
                  target="_blank"
                  className="hitus-main-social-navigation-list-link"
                >
                  <img src={pinterest} alt="pinterest" />
                </Link>
                <Link
                  to="https://www.linkedin.com/company/mymoonultra/"
                  target="_blank"
                  className="hitus-main-social-navigation-list-link"
                >
                  <img src={linkedin} alt="linkedin" />
                </Link>
                <Link
                  to="https://www.youtube.com/channel/UCGDkJCwXRpwYYYXqVJgx1lQ"
                  target="_blank"
                  className="hitus-main-social-navigation-list-link"
                >
                  <img src={youtube} alt="youtube" />
                </Link>
              </ul>
              <p className="hitus-main-social-navigation-content">
                Follow Us on Social Media
              </p>
            </div>
          </div>
          <form className="hitus-main-form">
            <div className="hitus-main-form-container">
              <label htmlFor="name">Name -</label>
              <input
                type="text"
                value={name}
                name="name"
                id="name"
                onChange={validateName}
                className="hitus-main-form-container-entry"
              />
            </div>
            <div className="hitus-main-form-container-entry-validations">
              <p className="hitus-main-form-container-entry-validations-text">
                {nameError && nameError}
              </p>
            </div>
            <div className="hitus-main-form-container">
              <label htmlFor="email">Email -</label>
              <input
                type="email"
                value={email}
                name="email"
                id="email"
                onChange={validateEmail}
                className="hitus-main-form-container-entry"
              />
            </div>
            <div className="hitus-main-form-container-entry-validations">
              <p className="hitus-main-form-container-entry-validations-text">
                {emailError && emailError}
              </p>
            </div>
            <div className="hitus-main-form-container">
              <label htmlFor="phone">Phone -</label>
              <input
                type="tel"
                value={phone}
                name="phone"
                id="phone"
                onChange={validatePhone}
                className="hitus-main-form-container-entry"
              />
            </div>
            <div className="hitus-main-form-container-entry-validations">
              <p className="hitus-main-form-container-entry-validations-text">
                {phoneError && phoneError}
              </p>
            </div>
            <div className="hitus-main-form-container">
              <label htmlFor="message">Message -</label>
              <textarea
                value={message}
                name="message"
                id="message"
                rows="5"
                onChange={validateMessage}
                className="hitus-main-form-container-entry"
              ></textarea>
            </div>
            <div className="hitus-main-form-container-entry-validations">
              <p className="hitus-main-form-container-entry-validations-text">
                {messageError && messageError}
              </p>
            </div>
            <button
              disabled={disabled}
              style={{
                backgroundColor: disabled ? "grey" : "black",
                cursor: disabled ? "not-allowed" : "pointer",
              }}
              className="hitus-main-form-button"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default HitUs;
