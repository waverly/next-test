import React from 'react';
import { BlockWrapper } from "./carouselBlockStyles";

const DoubleColumnBlock = (props) => {
    return (
        <BlockWrapper>
            <div className="single-column-block">
                <h3>SINGLE COLUMN TEXT BLOCK</h3>
                <p className="single-column body-two">
                "We have built a school funding system that is reliant on geography, and therefore the school funding system has inherited all of the historical ills of where we have forced and incentivized people to live," she says. Public schools are primarily funded by local and state sources — the federal government pays for less than 10 percent, on average, of K-12 education. States sometimes step in to provide extra funding for districts that need it most. But not all states have been able to keep up with that demand.
                </p>
                <a target="_blank" href="https://www.google.com"><p className="button underline">Read The Story</p></a>
            </div>
        </BlockWrapper>
    );
};

export default DoubleColumnBlock;