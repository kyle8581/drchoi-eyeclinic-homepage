import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import SightCorrectionSurgery from './sightcorrection/SightCorrectionSurgery'
import DoctorHome from './doctor-ment/DoctorHome'
import NoanHome from './noan/NoanHome'
import NoPay from './no-pay/NoPay'
import Icl from './icl/Icl'
import TestProcess from './test-process/TestProcess'
import DreamLens from './dream-lens/DreamLens'
function App() {
    return (
        <BrowserRouter>
            <Route
                path="/sight-correction"
                component={SightCorrectionSurgery}
            />
            <Route path="/cataract" component={NoanHome} />
            <Route path="/" exact={true} component={Home} />
            <Route path="/dr-choi" component={DoctorHome} />
            <Route path="/no-pay" component={NoPay} />
            <Route path="/icl" component={Icl} />
            <Route path="/test-process" component={TestProcess} />
            <Route path="/dream-lens" component={DreamLens} />
        </BrowserRouter>
    )
}

export default App
