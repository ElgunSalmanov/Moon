import "./login.scss";

function Login() {
  return (
    <>
      <div className="contain">
        <form className="contain-login">
          <h1 className="contain-login-title">Login</h1>
          <div className="contain-login-container">
            <label
              htmlFor="email-login"
              className="contain-login-container-label"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email-login"
              className="contain-login-container-entry"
            />
          </div>
          <div className="contain-login-container">
            <label
              htmlFor="password-login"
              className="contain-login-container-label"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password-login"
              className="contain-login-container-entry"
            />
          </div>
          <p className="contain-login-forgot">Forgot your password?</p>
          <button className="contain-login-sign">Sign in</button>
          <p className="contain-login-content">Or Login with</p>
          <button className="contain-login-facebook">Facebook</button>
        </form>
        <div className="contain-or-line">
          <span className="contain-or-line-text">OR</span>
        </div>
        <form className="contain-register">
          <h1 className="contain-register-title">Create Account</h1>
          <div className="contain-register-container">
            <label
              htmlFor="name-first-register"
              className="contain-register-container-label"
            >
              First Name*
            </label>
            <input
              type="text"
              name="name"
              id="name-first-register"
              className="contain-register-container-entry"
            />
          </div>
          <div className="contain-register-container">
            <label
              htmlFor="name-register"
              className="contain-register-container-label"
            >
              Last Name*
            </label>
            <input
              type="text"
              name="name"
              id="name-register"
              className="contain-register-container-entry"
            />
          </div>
          <div className="contain-register-container">
            <label
              htmlFor="email-register"
              className="contain-register-container-label"
            >
              Email*
            </label>
            <input
              type="email"
              name="email"
              id="email-register"
              className="contain-register-container-entry"
            />
          </div>
          <div className="contain-register-container">
            <label
              htmlFor="password-register"
              className="contain-register-container-label"
            >
              Password*
            </label>
            <input
              type="password"
              name="password"
              id="password-register"
              className="contain-register-container-entry"
            />
          </div>
          <button className="contain-register-create">Create</button>
        </form>
      </div>
    </>
  );
}

export default Login;
