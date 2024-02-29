import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="foot">
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Midnight Store</strong> by <a href="#">Alain Toledo</a>{" "}
            2024.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
