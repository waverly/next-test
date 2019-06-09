import { css } from "styled-components";
import { media } from "styles/style-utils";

export const theme = {
  carousel: {
    width: "70vw",
    mobileWidth: "100vw",
    paddingHorizontal: "9vw"
  },
  z: {
    text: 10,
    carousel: 20,
    nav: 50,
    navIcon: 80,
    overlay: 100,
    threeDot: 110,
    modal: 120,
    alert: 150
  },
  spacing: {
    eighth: "2px",
    quarter: "4px",
    half: "7px",
    single: "14px",
    double: "24px",
    triple: "36px",
    quadruple: "48px"
  },
  fontSize: {
    h1: "2.4rem",
    h2: "2rem",
    h3: "1.8rem",
    p: "1.6rem",
    h4: "1.4rem",
    h5: "1.4rem",
    mobileXl: "5rem",
    mobileL: "3.2rem",
    mobileP: "2rem"
  },
  lineHeight: {
    h1: "2.4rem",
    h2: "1.8rem",
    h3: "1.8rem",
    p: "2.1rem",
    h4: "1.8rem",
    h5: "1.8rem",
    mobileXl: "7rem",
    mobileL: "5rem",
    mobileP: "3rem"
  },
  blocks: {
    text: css`
      width: 70vw;
      max-width: 800px;
    `
  },
  cssMixins: {
    absCenter: css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,
    maxWidth: css`
      max-width: 1800px;
      box-shadow: 0px 4px 20px rgba(108, 85, 47, 0.5);
      margin: 0 auto;
      overflow-x: hidden;
    `,
    respContainer: css`
      position: relative;
      overflow: hidden;
      padding-top: 56.25%;
      width: 100%;
      background: #ffffff;
      border: 2px solid #6c552f;
      box-sizing: border-box;
      box-shadow: 0px 3px 0px #6c552f;
      border-radius: 10px;

      .resp-iframe {
        position: absolute;
        top: 7px;
        left: 7px;
        width: calc(100% - 14px);
        height: calc(100% - 14px);
        border: 0;
      }

      ${media.handheld`

      border: 1px solid #6c552f;
      box-shadow: 0px 1px 0px #6c552f;
      border-radius: 5px;

        .resp-iframe {
          top: 4px;
          left: 4px;
          width: calc(100% - 8px);
          height: calc(100% - 8px);
        }
      `}
    `
  },
  typeMixins: {
    body: css`
      font-family: "CCBackBeat";
      color: white;
      font-size: 1.6rem;
      line-height: 2.1rem;
      -webkit-text-stroke: unset;
      text-shadow: unset;
    `,
    bold: css`
      font-family: "SecretOrigins", Helvetica, sans-serif;
      color: white;
      font-weight: normal;
    `,
    headerThin: css`
      font-family: "SecretOrigins", Helvetica, sans-serif;
      color: white;
      font-weight: normal;
      letter-spacing: 1px;
      text-shadow: 0px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
        -1px 1px 0 #000, 1px 1px 0 #000;
    `,
    cta: css`
      line-height: 2.5rem;
      letter-spacing: 1px;
      font-size: 3.6rem;
      text-align: center;
      ${props => props.theme.typeMixins.bold};

      text-shadow: -1.5px -1.5px 0 #000, 0 -1.5px 0 #000, 1.5px -1.5px 0 #000,
        1.5px 0 0 #000, 1.5px 1.5px 0 #000, 0 1.5px 0 #000, -1.5px 1.5px 0 #000,
        -1.5px 0 0 #000, 0px 2.5px 0 #000, -1.5px 2.5px 0 #000,
        1.5px 2.5px 0 #000;

      ${media.handheld`
          line-height: 2.2rem;
          font-size: 3.2rem;
      `};
    `
  },
  fontWeight: { light: "200", regular: "400", medium: "600", heavy: "800" }
};

// end type
