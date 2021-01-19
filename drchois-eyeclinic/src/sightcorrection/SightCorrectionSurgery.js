import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SideNav from "./sidebar/SideNavBar";
import TopNav from "../TopNav";
import SurgeryInOne from "./surgeries/surgeryInOne";
import './SightCorrectionSurgery.css'
function SightCorrectionSurgery() {
  return (
    <section className="sightcorrection-container">
      <div className="topnav__force__fix">
        <TopNav />

      </div>
      <Router>
        <SideNav />
        <SurgeryInOne/>
      </Router>
    </section>
  );
}

export default SightCorrectionSurgery;
