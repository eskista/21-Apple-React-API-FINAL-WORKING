import React, { Component } from "react";
import "../../Common/css/styles.css";

class Alert extends Component {
  render() {
    return (
      <section className="alert-section top-50">
        <div className="alert alert-warning container">
          <div className="alert-title">We’re open for you.</div>
          <div className="alert-text">
            <a href="https://www.apple.com/shop"> Shop online </a>and get free,
            no‑contact delivery, Specialist help, and more.
          </div>
        </div>
      </section>
    );
  }
}

export default Alert;
