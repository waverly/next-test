import React from 'react';
import { BlockWrapper } from "./carouselBlockStyles";

const DateBlock = (props) => {
    return (
        <BlockWrapper>
            <div className="date-block">
                <img src="/static/images/1957.svg" alt="" />
                <h2>Escorted to class via troopers</h2>
            </div>
        </BlockWrapper>
    );
};

export default DateBlock;