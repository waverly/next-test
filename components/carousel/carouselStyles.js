import styled from "styled-components";

export const CarouselWrap = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow: hidden;
    z-index: ${ props => props.theme.z.carousel};
    padding-left: 85vw;

    @media all and (max-width: 768px){
        padding-left: 100vw;
    }
`

export const BlockContainer = styled.div`
         transform: translateX(${props => props.translate});
         transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
         height: 100%;
         width: calc(
           ${props => props.theme.carousel.width} *
             ${props => props.numBlocks} + 15vw
         );
         display: flex;

         @media all and (max-width: 768px) {
           width: calc(
             ${props => props.theme.carousel.mobileWidth} *
               ${props => props.numBlocks} + 15vw
           );
         }
       `;