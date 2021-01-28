import React, { useState } from 'react'
import styled from 'styled-components'
import { ShowUp } from './Deparment.components'
import './Department.css'
import DepartmentButton from './icon_components/DepartmentButton'
import GreenBox from './icon_components/GreenBox'
const DepartmentGreenBox = styled(GreenBox)`
    @media screen and (max-width: 500px) {
        width: 1rem;
        height: 0.25rem;
    }
`
function Department() {
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    function click1() {
        setShow1(!show1)
        console.log(1)
    }
    function click2() {
        console.log(2)

        setShow2(!show2)
    }
    function click3() {
        setShow3(!show3)
    }
    const components = [
        { id: 0, comp: ['스마일', '라식', '라섹', 'ICL'] },
        { id: 1, comp: ['드림렌즈', 'RGP렌즈'] },
        { id: 2, comp: ['백내장', '노안교정'] },
    ]
    // function toggleShow(index) {
    //     console.log(index);
    //     setShow(
    //         show.map((ele)=>(ele.id === index?{...ele, state: !ele.state}:ele))
    //     );
    // }
    // console.log(show);
    return (
        <div className="department__wrapper">
            <div id="department__content">
                <div className="department__description">
                    <div className="title" onClick={click1}>
                        <DepartmentGreenBox />
                        <p>진료과목</p>
                    </div>
                    <div className="body1">
                        <div className="body1_wrapper">
                            <p className="body1_1">"Since 1999"</p>
                            <p className="body1_2">타협없는 안전지향</p>
                        </div>
                    </div>
                    <div className="body2">
                        <div className="body2_wrapper">
                            <p>최신의료시스템을 갖추고 </p>
                            <p>있는 본원에서는 정밀진단 후 꼭</p>
                            <p>필요한 치료, 최적화된 수술만을 </p>
                            <p>권해드리며 의료진과 충분한 상담</p>
                            <p>후 투명한 진료, 안전한 수술,</p>
                            <p>숙련된 스텝들의 사후관리를</p>
                            <p>원칙으로 하고 있습니다. </p>
                        </div>
                    </div>
                </div>
                <div className="department__menu">
                    <div className="department__menu__leftcol">
                        <div className="sight__correction__menu">
                            <div className="wrapper1">
                                <img
                                    src="department_image/background1.png"
                                    alt="bg"
                                />
                                <div className="contents">
                                    <DepartmentButton
                                        text="시력교정센터"
                                        pass={click1}
                                    />
                                    <ShowUp show={show1}>
                                        <div className="showup">
                                            {components[0].comp.map((a) => (
                                                <span>{a}</span>
                                            ))}
                                        </div>
                                    </ShowUp>
                                </div>
                            </div>
                        </div>
                        <div className="lens__menu">
                            <div className="wrapper2">
                                <img
                                    src="department_image/background2.png"
                                    alt="bg"
                                />
                                <div className="contents">
                                    <DepartmentButton
                                        text="렌즈센터"
                                        pass={click2}
                                    />
                                    <ShowUp show={show2}>
                                        <div className="showup">
                                            {components[1].comp.map((a) => (
                                                <span>{a}</span>
                                            ))}
                                        </div>
                                    </ShowUp>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="noan__menu">
                        <div className="wrapper3">
                            <img
                                src="department_image/background3.png"
                                alt="bg"
                            />
                            <div className="contents">
                                <DepartmentButton
                                    text="노안·백내장센터"
                                    pass={click3}
                                />
                                <ShowUp show={show3}>
                                    <div className="showup">
                                        {components[2].comp.map((a) => (
                                            <span>{a}</span>
                                        ))}
                                    </div>
                                </ShowUp>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rear_ment">
                <p>MEDICAL</p>
                <p>DEPARTMENTS</p>
            </div>
        </div>
    )
}
export default Department
