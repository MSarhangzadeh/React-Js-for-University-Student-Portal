import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import Footer from "./Footer";


{/* shumara danehsjuyi duzalajakh bar assas 2 addad bu il ki olur 25 bad 4 random addad sora social id vin akhir 2 adadi */} 

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleDummySignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match! Please try again.");
    } else {
      setErrorMessage("");
      alert("Dummy account created successfully!");
    }
  };

  const handleDummySocialLogin = (platform) => {
    alert(`Logging in with ${platform} (dummy)`);
  };

  return (
    <>
      <NavItems />
      <br />
      <br />
      <br />
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">Register Now</h3>
            <form className="account-form" onSubmit={handleDummySignup}>

              {/* First Name & Last Name */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>

              {/* Social ID & Email row */} 
              {/* Social IDaz bayad dagig 10 adad bashe */} 
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div className="form-group">
                  <input
                    type="text"
                    name="socialId"
                    placeholder="Social ID"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>

              {/* Date of Birth  */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <div className="form-group" style={{ width: "50%" }}>
                  <input
                    type="date"
                    name="dob"
                    placeholder="Date of Birth"
                    required
                    style={{ width: "100%" }}
                  />
                </div>
              </div>

              {/* Password & Confirm Password */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
              </div>

              {/* Error message */}
              {errorMessage && (
                <div className="text-danger mb-2">{errorMessage}</div>
              )}

              <div className="form-group">
                <button className="lab-btn" type="submit">
                  <span>Get Started Now</span>
                </button>
              </div>
            </form>

            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Already a member? <Link to="/login">Login</Link>
              </span>
              <span className="or">
                <span>or</span>
              </span>

              <h5 className="subtitle">Register With Social Media</h5>
              <ul className="lab-ul social-icons justify-content-center">
                <li>
                  <button
                    onClick={() => handleDummySocialLogin("GitHub")}
                    className="github"
                  >
                    <i className="icofont-github"></i>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleDummySocialLogin("Facebook")}
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleDummySocialLogin("Twitter")}
                    className="twitter"
                  >
                    <i className="icofont-twitter"></i>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleDummySocialLogin("LinkedIn")}
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleDummySocialLogin("Instagram")}
                    className="instagram"
                  >
                    <i className="icofont-instagram"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
