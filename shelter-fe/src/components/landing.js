import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Landing = () => (
  <section className="landing">
    <div className="Main-photo">
      <button className="Button-orange">
        <Link to="/adopt">ADOPT</Link>
      </button>
    </div>
    <div className="Main-text">
      <h1>Animal Shelter and Adoption Information</h1>
      <p>
        We are very fortunate to live in a community that supports its Animal
        Control and Shelter and that takes pet responsibility seriously. Due to
        the shelter’s commitment to promoting spaying and neutering of pets to
        prevent unwanted litters, we have been successful at reducing the amount
        of animals that end up in our shelter, thereby, reducing the number of
        animals that must be euthanized due to a lack of homes. We are extremely
        fortunate to be a shelter that only euthanizes animals because of
        serious health or behavior issues rather than lack of space. The Animal
        Shelter provides the following services:
      </p>
      <ul>
        <li>Pet Adoptions</li>
        <li>Pet impound redemptions</li>
        <li>Lost and found animal tracking</li>
        <li>License sales</li>
        <li>Live trap rentals</li>
        <li>Pet cremation</li>
        <li>Humane education</li>
      </ul>
      <hr />
      <div className="Annual-report">
        <h1>Annual Report</h1>
        <p>
          The{" "}
          <a href="http://co-summitcounty2.civicplus.com/DocumentCenter/View/14611">
            Summit County Animal Control and Shelter Annual Report (pdf)
          </a>{" "}
          provides information and data on intakes and outcomes for all our
          shelter animals. Our shelter live release rate for dogs and cats is
          98%. <br />* * Shelter Live Release Rate = (Adoption+Return to
          Owner+Transfer+ Owner Requested Euthanasia)/(Adoption+Return to
          Owner+Transfer+Owner Requested Euthanasia+Shelter Euthanasia)
        </p>
      </div>
    </div>
  </section>
);
export default Landing;
