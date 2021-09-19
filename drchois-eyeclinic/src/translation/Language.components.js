import styled from 'styled-components'
import {Link} from "react-router-dom"

export const LanguageSelectContainer = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:space-around;
    width:100px;
`
export const Country = styled(Link)`
    img{
        width:20px;
    }
`