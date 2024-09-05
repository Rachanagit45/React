import React from "react";
import "../styles/footer.css";
import Logo from "./logo.svg"

const Footer = () => {
  return (
    <div className="footer-below">
      <footer>
        <div>
          <img src={Logo} height={80} width={80} alt="" />
          <p>Copy right &copy; 2022</p>
        </div>
        <div className="dummy">
          <h2>Calet</h2>
          <p>
            is simply dummy text of the pricing and typesetting industry. Lorem
            ipsum.
          </p>
        </div>
        <div className="explore">
          <p>EXPLORE</p>
          <ul>
            <li> SUPPORTS</li>
            <li> ABOUT US</li>
            <li> BLOG</li>
          </ul>
        </div>
        <div className="legal">
          <p>LEGAL</p>
          <ul>
            <li> SUPPORTS</li>
            <li> PRIVACY POLICY</li>
          </ul>
        </div>
        <div className="socials">
          <p>SOCIALS</p>
          <ul>
            <li> FACEBOOK</li>
            <li> LINKEDIN</li>
            <li> INSTAGRAM</li>
          </ul>
          a
        </div>
      </footer>
    </div>
  );
};

export default Footer;
