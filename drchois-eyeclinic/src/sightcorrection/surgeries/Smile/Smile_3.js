import React from 'react'
import './Smile_3.css'
import surgery from '../contents'
import GreenCircleWithCheck from '../../../icon_components/GreenCircleWithCheck'
function SmileThr() {
    const smile_ = surgery.filter((el) => el.Name === 'Smile')[0]
    const smile = [smile_.Pluses, smile_.Recommendation]
    return (
        <section className="Smile3-container">
            <div className="content-wrapper">
                {smile.map((pa, index) => {
                    return (
                        <div className={'pa' + index}>
                            <div className="textbox">
                                <div className="title">{pa[0]}</div>
                                <div className="summary">
                                    <div className="summary1">{pa[1]}</div>
                                    <div className="summary2">{pa[2]}</div>
                                </div>
                                <div className="detail">
                                    {pa
                                        .filter((el, index) => index > 2)
                                        .map((ele) => {
                                            return (
                                                <div className="detail-element">
                                                    <GreenCircleWithCheck className="green_circle_with_check" />
                                                    <h4>{ele}</h4>{' '}
                                                </div>
                                            )
                                        })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <img className="ynu2" src="smile/ynu_bg_2.png" alt="dr_choi" />
        </section>
    )
}
export default SmileThr
