import React from "react";

import Lasik from "./Lasik";
import Lasek from "./Lasek";
import SmileHome from "./Smile/Smile_home";
function SurgeryInOne(){ 
    return(
        <section className="surgeryInOne-container">
            {/* <TopNav className="topnav-force-fix"/> */}
            <Lasik id="lasik" />
            <Lasek id="lasek" />
            <SmileHome id="smile" />
        </section>
    );
}

export default SurgeryInOne;