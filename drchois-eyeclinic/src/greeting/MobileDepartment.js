import React, { useState } from 'react'
import { ShowUp } from '../Deparment.components'
import { Link } from 'react-router-dom'
import DepartmentButton from '../icon_components/DepartmentButton'
import './MobileDepartment.css'
function MobileDepartment() {
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
        {
            id: 0,
            comp: [
                { title: '스마일', add: './sight-correction' },
                { title: '라식', add: './sight-correction' },
                { title: '라섹', add: './sight-correction' },
                { title: 'ICL', add: './icl' },
            ],
        },
        {
            id: 1,
            comp: [
                { title: '드림렌즈', add: './dream-lens' },
                { title: 'RGP렌즈', add: './dream-lens' },
            ],
        },
        {
            id: 2,
            comp: [
                { title: '백내장', add: './cataract' },
                { title: '노안교정', add: './cataract' },
            ],
        },
    ]
    return (
        <div className="department__menu">
            <div className="department__menu__leftcol">
                <div className="sight__correction__menu">
                    <div className="wrapper1">
                        <div className="contents">
                            <DepartmentButton
                                text="시력교정센터"
                                pass={click1}
                            />
                            <ShowUp show={show1}>
                                <div className="showup">
                                    {components[0].comp.map((a) => (
                                        <Link to={a.add} className="link">
                                            {a.title}
                                        </Link>
                                    ))}
                                </div>
                            </ShowUp>
                        </div>
                    </div>
                </div>
                <div className="lens__menu">
                    <div className="wrapper2">
                        <div className="contents">
                            <DepartmentButton text="렌즈센터" pass={click2} />
                            <ShowUp show={show2}>
                                <div className="showup">
                                    {components[1].comp.map((a) => (
                                        <Link to={a.add} className="link">
                                            {a.title}
                                        </Link>
                                    ))}
                                </div>
                            </ShowUp>
                        </div>
                    </div>
                </div>
            </div>
            <div className="noan__menu">
                <div className="wrapper3">
                    {/* <img
                                src="department_image/background3.png"
                                alt="bg"
                            /> */}
                    <div className="contents">
                        <DepartmentButton
                            text="노안·백내장센터"
                            pass={click3}
                        />
                        <ShowUp show={show3}>
                            <div className="showup">
                                {components[2].comp.map((a) => (
                                    <Link to={a.add} className="link">
                                        {a.title}
                                    </Link>
                                ))}
                            </div>
                        </ShowUp>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileDepartment
