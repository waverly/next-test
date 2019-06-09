import React from 'react';
import { BlockWrapper } from "./carouselBlockStyles";

const QuoteBlock = (props) => {
    return (
        <BlockWrapper>
            <div className="quote-inner-text">
                <p className="button">
                    WHAT IS IT
                </p>
                <div className="block-text">
                    QUOTE OR DEFINITION TEXT THAT MAY SPAN UP TO THREE LINES BUT NO MORE THAN THREE
                </div>
                <a href="https://google.com" target="_blank">
                    <p className="button underline">
                        LEARN MORE
                </p>
                </a>

            </div>
        </BlockWrapper>
    );
};

export default QuoteBlock;