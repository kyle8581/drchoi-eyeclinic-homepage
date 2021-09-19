import React, {Fragment} from 'react'
import { useLocation, useParams } from 'react-router-dom'
import {
    LinearGradient,
    ForeignContainer,
    ForeignWrapper,
    LanguageSelectContainer,
    ForeignSec1,
    ForeignSec2,
    ForeignSec2Text,
    ForeignSec3,
    ForeignSec3Ele,
    ForeignSec3Contents,
    ForeignSec4,
    ForeignSec4Ele,
    ForeignSec4Title,
    ForeignSec4Information,
    ForeignSec4Imgcontainer,
    ForeignSec4Menucontainer,
    ForeignSec4MenuTitle,
    ForeignSec4Menus,
    ForeignSec4MenuEle,
} from './Foreign.components'
import translate from './translations'
import { Country } from './Language.components'
import { ReactComponent as NavLogo } from '../images/nav__logo.svg'
import TopNav from '../TopNav'
function Foreign() {
    const {language} = useParams()
    const imgPath = translate[language]["sec1Img"]
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    return (
        <Fragment>
        <ForeignContainer>
        <TopNav language={capitalizeFirstLetter(language)}/>
            <ForeignWrapper>
                <ForeignSec1 src={imgPath} />
            </ForeignWrapper>
        </ForeignContainer>
        </Fragment>
    )
}

export default Foreign
