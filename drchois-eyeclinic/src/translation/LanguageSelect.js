import React from 'react'
import styled from 'styled-components/macro'
import {useHistory} from "react-router-dom"
import {Modal} from "semantic-ui-react"
const LanguageModal = styled(Modal)`
background: transparent !important;
box-shadow: none !important;
/* border: 1px solid white; */
color:#fff;
.modal__content{
    background: transparent !important;
    /* border: 1px solid white; */
    display: flex !important;
    flex-direction: row !important; 
    align-items: center;
    justify-content: center;
    flex-wrap : wrap;
}
`
const LanguageIcon = styled.div`
    display: flex;
    width: 130px;
    height: 160px;
    border-radius: 0.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color:#929292;
    margin: none;
    img{
        width: 100px;
        margin-bottom: 10px;
    }
    :hover{
        img{
            border: 2px solid;
            border-radius: 10rem;
        }
        color:white;
    }
    @media screen and (max-width:750px){
        width: calc(130px * 0.75);
        height: calc(160px * 0.75);
        margin: 10px 20px ;
        img{
            width:calc(100px * 0.75);
            margin-bottom: 5px;

        }
    }
   
`
function LanguageSelect({open, setOpen}) {
    const history = useHistory()
    return (
        <LanguageModal
        open={open}
        onClose={()=>{setOpen(false)}}
        onOpen={()=>{setOpen(true)}}
        
        >
            <LanguageModal.Content className="modal__content">
                <LanguageIcon onClick={()=>{history.push("/")}}>
                    <img src="/translate/language_flag/KR_flag.png" alt="lang" />
                    <p>Korean</p>
                </LanguageIcon>
                <LanguageIcon onClick={()=>{history.push("/foreign/english")}}>
                    <img src="/translate/language_flag/EN_flag.png" alt="lang" />
                    <p>English</p>
                </LanguageIcon>
                <LanguageIcon onClick={()=>{history.push("/foreign/chinese")}}>
                    <img src="/translate/language_flag/CH_flag.png" alt="lang" />
                    <p>Chinese</p>
                </LanguageIcon>
                <LanguageIcon onClick={()=>{history.push("/foreign/russian")}}>
                    <img src="/translate/language_flag/RU_flag.png" alt="lang" />
                    <p>Russian</p>
                </LanguageIcon>
            </LanguageModal.Content>
        </LanguageModal>
    )
}

export default LanguageSelect
