import React from "react";
import "./Donation.css";

class Donation extends React.Component {
  render() {
    return (
      <div>
        <div class="bootstrap">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="./">
              <img src="images/logo2.png" height="28" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="./">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./gallery">
                    Gallery
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href=".donation">
                    Donation<span class="sr-only">(current)</span>
                  </a>
                </li>
                
              </ul>
            </div>
          </nav>
        </div>

        <div class="header">
          <header>
            <div class="banner-text">
              <div class="text-area">
                <h1>Donation</h1>
              </div>

              <p>
                We thank you for helping us to promote Hong Kong through
                cultural understanding.{" "}
              </p>
              <p>
                100% of your donated funds are used to run year-round activities
                and programs that supports our missions to help students build
                relationship with each other and enjoy being a part of BYU
              </p>
              <p class="banner-btn">
                <a href="https://www.patreon.com/">Make a Donation</a>
              </p>
            </div>
          </header>
        </div>

        <div className="footer">
          <a href="https://github.com/vunnelsewhere/ReactApp.git">
            GitHub
          </a>
        </div>

      </div>
    );
  }
}

export default Donation;
