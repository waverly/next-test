import styled from "styled-components";

export const IconWrapper = styled.div`
    width: ${ props => props.width ? props.width : 'auto'};
    margin: 0 auto;
    svg{
        width: 100% !important;
    }
`