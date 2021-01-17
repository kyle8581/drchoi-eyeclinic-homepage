import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./Home";
import SightCorrectionSurgery from "./sightcorrection/SightCorrectionSurgery";
import DoctorHome from "./doctor/doctor_home";
function App() {
  return (
    <HashRouter>
     <Route path="/sight-correction"  component={SightCorrectionSurgery} />
      <Route path="/" exact={true} component={Home} />
      <Route path="/dr-choi" component={DoctorHome} />
    </HashRouter>
  );
}

export default App;
