import React from 'react'
import styled from 'styled-components'
import BackgroundImg from '../backgrounds/doctorment-background.png';
const BackGround = styled.div`
    background-image : url(${BackgroundImg});
    background-repeat: no-repeat;
    background-size: 100vw auto;
    /* background-color: #ee0000; */
    width:100vw;
    height:100vh;
    `;
function DoctorMent(){
    return(
        <div >
            <div className="text__box">
                <div className="ment__box">
                    <div className="top">
                    <div className="quotation start">

                </div>  
                    </div>
                    <div className="bottom"></div>
                    

                    <div className="quotation end">

                    </div>
                </div>
            </div>
            <BackGround/>
            
        </div>
    );
}
export default DoctorMent;