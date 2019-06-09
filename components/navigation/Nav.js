import React, { Fragment, useState } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  text-transform: uppercase;
  z-index: 5;
  background-color: black;
  z-index: ${props => props.theme.z.nav};
  padding-top: 10rem;
  transition: 0.5s all;
  transform: ${props =>
    props.navDisplay ? "translateX(0)" : "translateX(120vw)"};
`;

const Left = styled.div`
  width: auto;
  transform: unset;
  color: white;
  display: block;
  width: 100%;
  text-align: center;
`;

const NavItems = styled.div`
  flex-direction: column;
  width: 100%;
  text-align: center;

  a {
    display: block;
  }
`;

const Icon = styled.button`
  width: 30px;
  height: 30px;
  border-radius: ${props => (props.navDisplay ? "0%" : "50%")};
  background-color: ${props =>
    props.navDisplay ? props.theme.keyColor : "black"};
  transition: 1s all;
  position: fixed;
  z-index: ${props => props.theme.z.alert};
  top: 20px;
  right: 20px;
  display: block;
  cursor: pointer;
`;

const NavItem = styled.h2`
  margin-left: 15px;
  ${props => props.theme.typeMixins.p};
  text-transform: uppercase;
  position: relative;
  color: white;
  display: inline-block;
  margin: 1rem 0;
  margin-left: 0;

  &:before {
    content: "";
    width: ${props => (props.active ? "100%" : "0")};
    height: 70%;
    position: absolute;
    background-color: ${props => props.theme.keyColor};
    top: 20%;
    left: 0;
    z-index: -1;
    opacity: ${props => (props.active ? "1" : "0")};
    transition: 0.5s width;
    width: ${props => (props.active ? "100%" : "0")};
  }

  &:hover {
    pointer-events: none;
    &:before {
      width: ${props => (props.active ? "100%" : "0")};
    }
  }
`;

const Nav = props => {
  const [navDisplay, setNavDisplay] = useState(false);

  return (
    <Fragment>
      <Icon
        navDisplay={navDisplay}
        onClick={() => setNavDisplay(!navDisplay)}
      />
      <NavWrapper navDisplay={navDisplay}>
        <Left>
          <NavItems>
            <Link to="/" onClick={() => setNavDisplay(!navDisplay)}>
              <NavItem active={props.location.pathname === "/"}>Home</NavItem>
            </Link>
            <Link to="/application" onClick={() => setNavDisplay(!navDisplay)}>
              <NavItem active={props.location.pathname === "/application"}>
                Application
              </NavItem>
            </Link>
          </NavItems>
        </Left>
      </NavWrapper>
    </Fragment>
  );
};

export default withRouter(Nav);
