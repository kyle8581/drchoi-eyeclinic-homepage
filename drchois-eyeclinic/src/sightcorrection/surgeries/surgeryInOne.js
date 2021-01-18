import React from "react";
import Lasik from "./Lasik";
import Lasek from "./Lasek";
import SmileHome from "./Smile_home";

function SurgeryInOne(){
    return(
        <section className="surgeryInOne-container">
            <Lasik id="lasik" />
            <Lasek id="lasek" />
            <SmileHome id="smile" />
        </section>
    );
}

export default SurgeryInOne;