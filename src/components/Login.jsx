import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import NavItems from "./NavItems";
import { NavItem } from "react-bootstrap";

// login da email dn sora social id va student number nanda girmakh olsun

const title = "Login";
const socialTitle = "Login With Social Media";
const btnText = "Submit Now";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleDummyLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // Simple dummy validation
    if (!email || !password) {
      setErrorMessage("Please fill in both email and password.");
      return;
    }

    setErrorMessage("");
    alert(`Logged in with Email: ${email}`);
  };

  const handleDummySocialLogin = (platform) => {
    alert(`Logging in with ${platform} (dummy)`);
  };

  return (
    <>
    <NavItems/>
    <br/>
    <br/>
    <br/>

    <div>
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>

            <form className="account-form" onSubmit={handleDummyLogin}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password *"
                  required
                />
              </div>

              {/* Error message */}
              {errorMessage && (
                <div className="error-message text-danger">{errorMessage}</div>
              )}

              <div className="form-group">
                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                  <div className="checkgroup">
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                  <Link to="/forgetpass">Forget Password?</Link>
                </div>
              </div>

              <div className="form-group text-center">
                <Link to="/dashboard" className="d-block lab-btn text-center">
                  <span>{btnText}</span>
                </Link>
              </div>
            </form>

            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Don’t Have any Account? <Link to="/signup">Sign Up</Link>
              </span>
              <span className="or">
                <span>or</span>
              </span>

              {/* social icons */}
              <h5 className="subtitle">{socialTitle}</h5>
              <ul className="lab-ul social-icons justify-content-center">
                <li>
                  <button
                    onClick={() => handleDummySocialLogin("GitHub")}
                    className="github"
                    type="button"
                  >
                    <i className="icofont-github"></i>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleDummySocialLogin("Facebook")}
                    className="facebook"
                    type="button"
                  >
                    <i className="icofont-facebook"></i>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleDummySocialLogin("Twitter")}
                    className="twitter"
                    type="button"
                  >
                    <i className="icofont-twitter"></i>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleDummySocialLogin("LinkedIn")}
                    className="linkedin"
                    type="button"
                  >
                    <i className="icofont-linkedin"></i>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleDummySocialLogin("Instagram")}
                    className="instagram"
                    type="button"
                  >
                    <i className="icofont-instagram"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Login;
