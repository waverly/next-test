import styled from "styled-components";

export const SectionWrap = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    scroll-snap-align: start;

    .inner-placeholder{
        width: 100%;
        height: 100%;
        background: black;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 10px solid aquamarine;
    }

`
