import React, { useState } from "react";
import * as GiIcons from "react-icons/gi";
import {
  SidebarContainer,
  NavIcon,
  NavWrapper,
  NavLinks,
} from "./SidebarElements";
import TabIcon from "./tabIcon";
function SideNav() {
  const [hover, setHover] = useState([
    { id: 0, state: false },
    { id: 1, state: false },
    { id: 2, state: false },
  ]);
  const surgeries = [
    { id: 0, name: "lasik" },
    { id: 1, name: "lasek" },
    { id: 2, name: "smile" },
  ];
  const onHover = (ind) => {
    setHover(
      hover.map((el) => (el.id === ind ? { ...el, state: !el.state } : el))
    );
  };
  console.log(hover);
  return (
    <SidebarContainer>
      {surgeries.map((el, index) => {
        console.log(index);
        return (
          <NavWrapper>
            <NavLinks>
              <NavIcon to={el.name} smooth={true} duration={1000}>
                <GiIcons.GiPlainCircle
                  onMouseEnter={() => onHover(index)}
                  onMouseLeave={() => onHover(index)}
                />
              </NavIcon>
              {hover[index].state ? (
                <TabIcon name={el.name} id={el.id} opacity="true" />
              ) : (
                <TabIcon name={el.name} id={el.id} opacity="false" />
              )}
            </NavLinks>
          </NavWrapper>
        );
      })}
    </SidebarContainer>
  );
}

export default SideNav;
