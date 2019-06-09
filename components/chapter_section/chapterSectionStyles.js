import styled from "styled-components";

export const SectionWrap = styled.div`
         height: 100vh;
         width: 100vw;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         position: relative;
         overflow-x: hidden;
         background: black;
         scroll-snap-align: start;
         scroll-snap-stop: always;
       `;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: ${props =>
    props.background
      ? `url(${props.background}) no-repeat center center`
      : null};
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${props => (props.shouldDisplay ? 1 : 0.3)};
  transition: 0.3s opacity;
`;

export const TextBlock = styled.div`
         position: absolute;
         left: ${props => (props.align === "left" ? "14.4vw" : "unset")};
         right: ${props =>
           props.align === "right" ? "9.4vw" : "unset"};
         top: 55vh;
         transform: translateY(-50%);
         z-index: ${props => props.theme.z.text};
         opacity: ${props => (props.shouldDisplay ? 1 : 0)};
         transition: 0.3s opacity;

         h1 {
           text-transform: uppercase;
           line-height: 0.8;
         }

         .button {
           margin-bottom: 0;
         }

         @media screen and (max-width: 768px) {
           left: 10vw;
           right: unset;
           top: unset;
           bottom: 15vh;
         }
       `;
