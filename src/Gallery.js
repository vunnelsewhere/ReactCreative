import React from "react";
import "./Gallery.css";

class Gallery extends React.Component {
  render() {
    return (
      <div>
        <div className="bootstrap">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="./">
              <img src="images/logo2.png" height="28" />
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
                <li className="nav-item">
                  <a className="nav-link" href="./">
                    Home
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="./gallery">
                    Gallery <span className="sr-only">(current)</span>
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

        <header>
          <div className="banner-text">
            <div className="text-area">
              <h1>Cultural Gallery</h1>
            </div>
          </div>
        </header>

        <div className="container">
          <div className="row">
            <div className="column-66"></div>
            <div className="column-33">
              <img src="images/trail.jpg" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="column-66"></div>
            <div className="column-33">
              <img src="images/market.jpg" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="column-33">
              <img src="images/clock.jpg" />
            </div>

            <div className="column-66"></div>
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

export default Gallery;
