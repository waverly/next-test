import styled from "styled-components";

export const PageWrap = styled.div`
  overflow: hidden;
  overflow-y: scroll;
  height: 100vh;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
`;
