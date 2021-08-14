import React from 'react'
import { useLocation } from 'react-router-dom'
import {LinearGradient,ForeignContainer,ForeignWrapper,LanguageSelectContainer,ForeignSec1,ForeignSec2,ForeignSec2Text,ForeignSec3,ForeignSec3Ele,ForeignSec3Contents,ForeignSec4,ForeignSec4Ele,ForeignSec4Title,ForeignSec4Information,ForeignSec4Imgcontainer,ForeignSec4Menucontainer,ForeignSec4MenuTitle,ForeignSec4Menus,ForeignSec4MenuEle} from './Foreign.components'
import translate from './translations'
import {Country} from './Language.components'

function Foreign() {
    const location = useLocation()
    const Lan = location.state
    const Rus = translate[2]
    const Chi = translate[1]
    const Eng = translate[0]
    const linearGradient = LinearGradient();

    return(
        <ForeignContainer>
            <ForeignWrapper>
            <LanguageSelectContainer>
                <Country to={{pathname:'/'}} className="Kor">
                    <img src="https://pics.freeicons.io/uploads/icons/png/5481736961536065003-512.png"/>
                </Country>
                <Country to={{pathname:'/foreign',state: Eng}}>
                    <img src="https://pics.freeicons.io/uploads/icons/png/13394302041536065017-512.png"/>
                </Country>
                <Country to={{pathname:'/foreign',state: Rus}}>
                    <img src="https://pics.freeicons.io/uploads/icons/png/37161591536064993-512.png"/>
                </Country>
                <Country to={{pathname:'/foreign',state: Chi}}>
                    <img src="https://pics.freeicons.io/uploads/icons/png/14523702201536064854-512.png"/>
                </Country>
            </LanguageSelectContainer>
            <ForeignSec1 src={Lan.sec1Img}/>
            {/* <ForeignSec2 className={linearGradient.root}>
                <ForeignSec2Text>{Lan.sec2Text.map((line)=>(<p>{line}</p>))}</ForeignSec2Text>
            </ForeignSec2>
            <ForeignSec3>
                <ForeignSec3Ele>
                    {Lan.sec3Ele.map((ele)=>(
                        <ForeignSec3Contents>
                            <img src={ele.img}/>
                            {ele.content.map((el)=>(
                                <p>{el}</p>
                            ))}
                        </ForeignSec3Contents>
                    ))}
                </ForeignSec3Ele>
            </ForeignSec3>
            <ForeignSec4>
                    {Lan.sec4Ele.map((ele,index)=>(
                        index<2?(
                            //노안,근시교정술
                            <ForeignSec4Ele>
                                <ForeignSec4Title>{ele.title}</ForeignSec4Title>
                                <ForeignSec4Information>{ele.information.map((line)=>(<p>{line}</p>))}</ForeignSec4Information>
                                <ForeignSec4Imgcontainer>
                                    {ele.img.map((image)=>(
                                        <div className="content">
                                            <img src={image.addr}/>
                                            {image.imgcomment.map((line)=>(
                                                <p>{line}</p>
                                            ))}
                                        </div>
                                        ))}
                                </ForeignSec4Imgcontainer>
                            </ForeignSec4Ele>
                        ):(
                            // 진료과목
                            <ForeignSec4Ele>
                            <ForeignSec4Title>{ele.title}</ForeignSec4Title>
                            <ForeignSec4Menucontainer>
                            {ele.menuTitle.map((menu,ind)=>(
                            <ForeignSec4MenuEle>
                                <ForeignSec4MenuTitle>{menu}</ForeignSec4MenuTitle>
                                <ForeignSec4Menus>{ele.menus[ind]}</ForeignSec4Menus>
                            </ForeignSec4MenuEle>
                            ))}
                            </ForeignSec4Menucontainer>
                            
                            </ForeignSec4Ele>
                        ))
                    )}
                    
                </ForeignSec4>  */}
            </ForeignWrapper>
        </ForeignContainer>
    )
}

export default Foreign