import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="foot">
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Midnight Store</strong> by <Link to="/">Alain Toledo</Link>{" "}
            2024.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
