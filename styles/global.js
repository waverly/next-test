// @flow
/* eslint-disable */
import { css } from "styled-components";
import normalized from "./normalized";

export const globalStyles = css`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap");

  ${normalized}

  @font-face {
    font-family: "Din";
    src: url("static/fonts/din.woff2") format("woff2"),
      url("static/fonts/din.woff") format("woff"), url("static/fonts/din.ttf") format("ttf"),
      url("static/fonts/din.eot") format("eot");
    font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    padding: 0;
    font-family: "Montserrat", sans-serif;
    background: black;
    overflow-x: hidden;
  }

  #root,
  #reactRoot {
    height: 100%;
  }

  figure {
    margin: 0;
  }

  img {
    max-width: 100%;
  }

  button,
  input,
  select,
  option,
  textarea {
    background: white;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    border: none;
    outline: none;
    line-height: normal;
    padding: 0;
    border-radius: 0;
    color: white;
    padding: 10px;
    margin: 10px 0;
    border-radius: 3px;
    border: 1px solid black;
  }

  button {
    cursor: pointer;
    background-color: white;
  }

  /******
    TYPE
  ******/

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: "Din", sans-serif;
    color: white;
    margin: 0;
  }

  h1 {
    font-size: 9.6rem;
    line-height: 1.05;
    letter-spacing: -1.375px;

    @media screen and (max-width: 768px) {
      font-size: 6rem;
      line-height: 0.95;
      letter-spacing: -0.875px;
    }
  }

  h2 {
    font-size: 4.8rem;
    line-height: 0.95;
    letter-spacing: -2.38px;

    @media screen and (max-width: 768px) {
      font-size: 3.4rem;
      line-height: 0.95;
      letter-spacing: -1.375px;
    }
  }

  h3 {
    font-size: 3.4rem;
    line-height: 0.95;
    letter-spacing: -1.375px;

    @media screen and (max-width: 768px) {
      font-size: 2.4rem;
      line-height: 1.2;
      letter-spacing: -0.375px;
    }
  }

  p,
  li {
    font-family: "Montserrat", sans-serif;
    color: white;
    margin-block-start: 0;
    margin-block-end: 0;
    font-size: 1.6rem;
    line-height: 1.6;
    font-weight: 400;

    @media screen and (max-width: 768px) {
      font-size: 1.4rem;
      line-height: 1.62rem;
    }
  }

  .block-text {
    font-family: "Din", sans-serif;
    font-size: 6rem;
    line-height: 2;
    text-transform: uppercase;
    letter-spacing: -0.875px;
    font-weight: 600;
    color: white;
    @media screen and (max-width: 768px) {
      font-size: 3.4rem;
      line-height: 1.35;
      letter-spacing: -1.375px;
    }
  }

  .body-two {
    font-family: "Montserrat", sans-serif;
    font-size: 2.2rem;
    line-height: 2;

    @media screen and (max-width: 768px) {
      font-size: 1.4rem;
      line-height: 1.6;
    }
  }

  .button {
    font-family: "Montserrat", sans-serif;
    font-size: 1.4rem;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: 1.625px;
    font-weight: 600;
  }

  .small {
    font-size: 1rem;
    line-height: 1.2;
    font-weight: 600;
    text-transform: uppercase;
  }

  .caption {
    font-family: "Montserrat", sans-serif;
    font-size: 1.2rem;
    line-height: 1.2;
    letter-spacing: 1.125px;
    font-weight: 400;
    opacity: .5;
  }

  .overline {
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    line-height: 1.2;
    letter-spacing: 1.625px;
    font-weight: 700;
  }

  .underline {
    text-decoration: underline;
  }

  ul {
    list-style-type: disc;
    margin-block-start: 0rem;
    margin-block-end: 0rem;
    margin-inline-start: 0rem;
    margin-inline-end: 0rem;
    padding-inline-start: 0rem;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /******
  END TYPE
  ******/

  /******
  TRANSITIONS
  ******/

  .fade-enter {
    opacity: 0.01;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }
  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  ::selection {
    background: rgba(255, 255, 255, 0.99);
    color: black;
    opacity: 0.99;
  }
  ::-moz-selection {
    background: rgba(0, 0, 0, 0.99);
    color: black;
    opacity: 0.99;
  }

  /******
  END TRANSITIONS
  ******/
`;
