import React from 'react'
import {Wrapper, Text, Title, Tropy } from './TabletGreeting.components'
function TabletGreeting(){
    return(
        <Wrapper>
            <img  className="bg" src='/greeting-tablet/background.png' alt="bg-tb"/>
            <Text src='/greeting-tablet/text.png' alt="txt"/>
            <Title src='/greeting-tablet/bottom_title.png' alt="title"/>
            <Tropy src='/greeting-tablet/tropy.png' alt="tropy"/>
        </Wrapper>
        )
}
export default TabletGreeting;