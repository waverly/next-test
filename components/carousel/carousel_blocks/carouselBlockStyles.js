import styled from "styled-components";

export const BlockWrapper = styled.div`
         width: ${props => props.theme.carousel.width};
         height: 100%;
         padding: 0 ${props => props.theme.carousel.paddingHorizontal};
         display: inline-flex;
         justify-content: center;
         align-items: center;
         text-align: center;
         overflow: hidden;
         /* outline: 2px solid pink; */

         @media screen and (max-width: 768px) {
           width: ${props => props.theme.carousel.mobileWidth};
         }

         .date-block {
           position: relative;
           img {
             width: 100%;
           }
           h2 {
             position: absolute;
             bottom: 0;
             transform: translateY(50%);
             right: 0;
             text-transform: uppercase;
           }
         }

         .image-block {
           text-align: center;
           img {
             width: 100%;
             margin: 0 auto;
           }
           p {
             margin-top: 1rem;
             line-height: 1.5;
           }
         }

         .quote-inner-text {
           .button {
             margin: 2rem 0;
           }
         }

         .single-column-block,
         .double-column-block {
           width: 100%;
           text-align: left;

           h3 {
             text-transform: uppercase;
             margin-bottom: 2rem;
           }

           .button {
             margin-top: 2rem;
           }
         }

         .single-column-block {
           @media screen and (max-width: 768px) {
             h3 {
               font-size: 3.4rem;
             }
           }
         }

         .single-with-image-block {
           display: flex;
           justify-content: space-between;
           align-items: center;
           text-align: left;

           .button {
             margin-top: 2rem;
           }

           h3 {
             text-transform: uppercase;
             margin-bottom: 2rem;
           }

           p {
             line-height: 1.5;
           }

           .img-wrap,
           .text {
             width: 45%;
           }

           .img-wrap {
             text-align: center;
           }

           @media screen and (max-width: 768px) {
             flex-direction: column;

             img {
               max-height: 45vh;
               width: auto;
             }

             .img-wrap,
             .text {
               width: 100%;
             }

             .img-wrap {
               margin-bottom: 3rem;
             }

             h3 {
               font-size: 2rem;
               line-height: 1.2;
             }
             p {
               font-size: 1.2rem;
               line-height: 1.3;
             }
           }
         }

         .double-column-block {
           display: flex;
           flex-direction: column;
           .single-column {
             column-count: 2;
             column-gap: 50px;
           }
           h3 {
             width: 100%;
             margin-right: auto;
             margin-bottom: 2rem;
           }

           @media screen and (max-width: 768px) {
             column-count: 1;
             column-gap: 0;
             h3 {
               font-size: 2rem;
               line-height: 1.2;
               letter-spacing: -0.375px;
             }
             p {
               font-size: 1.2rem;
               line-height: 1.5;
               font-weight: 500;
             }
           }
         }

         .button,
         .block-text {
         }
       `;
