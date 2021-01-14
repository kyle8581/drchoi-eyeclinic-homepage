import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./Home";
import SightCorrectionSurgery from "./sightcorrection/SightCorrectionSurgery";
import DoctorSayHi from "./doctor/doctor_main";
function App() {
  return (
    <HashRouter>
     <Route path="/sight-correction"  component={SightCorrectionSurgery} />
      <Route path="/" exact={true} component={Home} />
      <Route path="/dr-choi" component={DoctorSayHi} />
    </HashRouter>
  );
}

export default App;
