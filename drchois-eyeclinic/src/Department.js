import React from 'react'
import './Department.css'
import DepartmentButton from './icon_components/DepartmentButton'
import GreenBox from './icon_components/GreenBox'
function Department(){
    return(
        <div className="department__wrapper">
            <div id="department__content">
                <div className="department__description">

                    <div className="title">
                        <GreenBox className="gb__department"/>
                        <p>진료과목</p>
                    </div>
                    <div className="body">
                        <p>저희 압구정최안과는 </p> 
                        <span></span>
                        <p>확실하게 수술하는 병원으로</p>
                        <span></span>
                        <p>의료진의 치료와 지시사항을 </p>
                        <span></span>
                        <p>잘 따르기만 하면 빠른 시간 내에</p> 
                        <span></span>
                         
                        <p>완쾌가 가능합니다.</p>
                    </div>
                </div>
                <div className="department__menu">
                    <div className="sight__correction__menu">
                        <DepartmentButton text="시력교정센터"  className="dp__button"/>
                        <img src="department_image/background1.png" alt="bg"/>
                    </div>
                    <div className="lens__menu">
                        <DepartmentButton text="렌즈센터" className="dp__button"/>
                        <img src="department_image/background2.png" alt="bg"/>
                    </div>
                    <div className="noan__menu">
                        <DepartmentButton text="노안·백내장센터" className="dp__button"/>
                        <img src="department_image/background3.png" alt="bg"/>
                    </div>
                </div>
            </div>

            <div id="department__text__bottom">
                <div id="top">
                    MEDICAL
                </div>
                <div id="bottom">
                    DEPARTMENTS
                </div>
            </div>

            

        </div>

    )

}
export default Department;