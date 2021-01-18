import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SideNav from "./sidebar/SideNavBar";
import TopNav from "../TopNav";
import SurgeryInOne from "./surgeries/surgeryInOne";
function SightCorrectionSurgery() {
  return (
    <section className="sightcorrection-container">
      <TopNav/>
      <Router>
        <SideNav />
        <SurgeryInOne/>
      </Router>
    </section>
  );
}

export default SightCorrectionSurgery;
