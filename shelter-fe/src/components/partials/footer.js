import React from "react";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-contact">
        <p>
          <strong>Summit County Animal Control and Shelter</strong>
          <br /> 0058 Nancy’s Place <br />
          P.O. Box 5225 Frisco, CO 80443 <br />
          Ph: (970) 668-3230 <br />
          Fx: (970) 668-4117
        </p>
      </div>
      <div className="Footer-hours">
        <p>
          To reach an Animal Control Officer: (970) 668-8600 <br />
          Directions: 1/4 mile South of Frisco Main St. off Hwy 9, turn right
          onto SCR 1004, we are the 2nd building on the left. <br />
          Shelter Hours Monday - Saturday: 9:00 am - 5:30 pm <br />
          Animal Visitation Monday - Saturday: 10:00 am - 4:00 pm
        </p>
      </div>
      <div className="Footer-social">
        <a href="https://www.facebook.com/Summit-County-Animal-Control-and-Shelter-201413533267029/">
          <FontAwesomeIcon
            icon={faFacebookSquare}
            size="2x"
            style={{ color: "white" }}
          />
        </a>
        <a href="https://www.instagram.com/summitcountyanimalshelter/?hl=en">
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            style={{ color: "white" }}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
