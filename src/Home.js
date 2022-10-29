import React from "react";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="bootstrap">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="./">
              <img src="./images/logo2.png" height="28" alt="Logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="./">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./gallery">
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./donation">
                    Donation
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="container">
          <div className="banner-text">
            <div className="text-area">
              <h1>Hong Kong Culture Association</h1>
            </div>

            <p>
              We serves as a platform for students at BYU who have a sincere
              love for Hong Kong.The Hong Kong Culture Association invites those
              who are interested in Hong Kong culture to join!
            </p>
            <p className="banner-btn">
              <a href="./gallery">Learn More</a>
            </p>
          </div>
        </div>

        <div className="footer">
          <a href="https://github.com/vunnelsewhere/ReactCreative.git">
            GitHub
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
