import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-about">
        <h2 className="about">About</h2>
        <span>This is a SoundCloud Clone website made by Andrew Wilkinson</span>
      </div>
      <div className="footer-links">
        <h2>Links:</h2>
        <a href="https://github.com/adub671">Github</a>
        <a href="https://www.linkedin.com/in/andrew-wilkinson-847a84113/">
          Linkedin
        </a>
      </div>
    </div>
  );
}
