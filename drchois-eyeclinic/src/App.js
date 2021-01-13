import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./Home";
import SightCorrectionSurgery from "./sightcorrection/SightCorrectionSurgery"
function App() {
  return (
    <HashRouter>
     <Route path="/sight-correction"  component={SightCorrectionSurgery} />
      <Route path="/" exact={true} component={Home} />

    </HashRouter>
  );
}

export default App;
