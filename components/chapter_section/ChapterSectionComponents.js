import styled from "styled-components";
import { DownArrow, MobileCarouselArrow } from "components/icons";

const ArrowWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: ${props => props.theme.z.nav};
  bottom: ${props => (props.position === "bottom" ? "5vh" : "50vh")};
  transform: translateY(-50%) rotate(${props => props.rotate});
  left: ${props => (props.side === "left" ? "3vw" : "unset")};
  right: ${props => (props.side === "right" ? "3vw" : "unset")};
  display: none;
  visibility: ${props => (props.shouldDisplay ? "visible" : "hidden")};
  opacity: ${props => (props.shouldDisplay ? 1 : 0)};
  transition: opacity 0.3s visible 0.5s;
  width: ${props => (props.width ? props.width : "30px")};
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const DownWrapper = styled.div`
  cursor: pointer;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 5vh;
  left: 50vw;
  transform: translateX(-50%);
  position: absolute;
  z-index: ${props => props.theme.z.nav};
  text-align: center;
  visibility: ${props => (props.shouldDisplay ? "visible" : "hidden")};
  opacity: ${props => (props.shouldDisplay ? 1 : 0)};
  transition: opacity 1s visible 1.3s;
  p {
    margin-bottom: 1rem;
  }
  .middle {
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const SlideOneArrowWrapper = styled.div`
  display: none;
  position: absolute;
  align-items: center;
  bottom: 8vh;
  right: 3vw;
  z-index: ${props => props.theme.z.nav};
  opacity: ${props => (props.shouldDisplay ? 1 : 0.3)};
  visibility: ${props => (props.shouldDisplay ? "visible" : "hidden")};
  transition: 0.3s opacity 0.5s visibility;
  p {
    margin-right: 15px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const MobileArrow = props => (
  <ArrowWrapper {...props}>
    <MobileCarouselArrow rotate="180deg" />
  </ArrowWrapper>
);

export const DownIndicator = props => (
  <DownWrapper shouldDisplay={props.shouldDisplay}>
    <p className="small">Chapter 3.</p>
    <p className="middle">DINER</p>
    <DownArrow width="100%" />
  </DownWrapper>
);

export const SlideOneArrow = props => (
  <SlideOneArrowWrapper
    shouldDisplay={props.shouldDisplay}
  >
    <p className="small">
      Tap to <br /> Read More
    </p>
    <MobileCarouselArrow rotate="0deg" />
  </SlideOneArrowWrapper>
);
