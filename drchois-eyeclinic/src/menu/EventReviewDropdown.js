import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Menu } from 'semantic-ui-react'
import styled from 'styled-components/macro'
import useWindowDimensions from "../useWindowDimensions"
const MenuText = styled.div`
    text-decoration: none;
    color: #707070;
    font-size: 1rem;
    height: 60px;
    display: flex;
    /* align-items: left; */
    justify-content: space-around;
    align-items: center;
    list-style: none;
    text-decoration: none;
    color: #707070;
    font-weight: 600;
    /* position: absolute;
    left: 700px; */
    font-family: NanumSquare_acB;
    background: none;
    
    
    :hover {
        cursor: pointer;
        background-color: transparent;
    }
    div {
        background-color: rgba(0,0,0,0);

    }
    .item{
        background-color:transparent;
        border: none;
    }
    .dropdown.icon{
        width: 0;
    }
    .dropdown_box{
       box-shadow: none;
       border:none;
   }
   .dropdown_menu, .dropdown_box{
       box-shadow: none;
       border:none;
       background-color: transparent;
   }
   .dropdown_menu:hover, .dropdown_box:hover{
    background-color: transparent;
   }
   
`
const DropDownBox = styled(Dropdown)`
    .icon{
        display: none;
    }
`


function EventReviewDropdown({ showList, setShowList }) {
    const {width, height} = useWindowDimensions()
    if(width < 880){
        return(<Fragment/>)
    }
    
    return (
        <Fragment>
            <MenuText>
                {/* <div
                    onMouseEnter={() => {
                        setShowList(true)
                        console.log('mouse enter')
                    }}
                >
                    {'이벤트/후기'}
                </div> */}
                <Menu compact className="dropdown_menu">
                    <DropDownBox simple item text="후기/이벤트" className="dropdown_box">
                        <DropDownBox.Menu className="dropdown_list">
                            <DropDownBox.Item className="dropdown_item">{"백내장 수술후기"}</DropDownBox.Item>
                            <DropDownBox.Item className="dropdown_item">{"시력교정 수술후기"}</DropDownBox.Item>
                            <DropDownBox.Item className="dropdown_item">{"진행중인 이벤트"}</DropDownBox.Item>
                        </DropDownBox.Menu>
                    </DropDownBox>
                   
                </Menu>
            </MenuText>
            {/* {showList ? (
                <DropdownBox
                    onMouseOver={() => {
                        setShowList(true)
                        console.log("mouse over")
                    }}
                    onMouseOut={() => {
                        // setShowList(false)
                        console.log("mouse out")
                    }}
                >
                    <div>{'백내장 수술후기'}</div>
                    <div>{'시력교정 수술후기'}</div>
                    <div>{'진행 중인 이벤트'}</div>
                </DropdownBox>
            ) : (
                <Fragment />
            )} */}
        </Fragment>
    )
}

export default EventReviewDropdown
