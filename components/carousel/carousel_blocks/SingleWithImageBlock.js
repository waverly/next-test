import React from 'react';
import { BlockWrapper } from './carouselBlockStyles'

const SingleWithImageBlock = (props) => {
    return (
        <BlockWrapper>
            <div className="single-with-image-block">

                <div className="img-wrap">
                    <img src="/static/images/pool.jpg" alt=""/>
                    <p className="caption">caption here</p>
                </div>

                <div className="text">
                    <h3>SINGLE COLUMN TEXT BLOCK</h3>
                    <p className="single-column">
                        "We have built a school funding system that is reliant on geography, and therefore the school funding system has inherited all of the historical ills of where we have forced and incentivized people to live," she says. Public schools are primarily funded by local and state sources — the federal government pays for less than 10 percent, on average, of K-12 education. States sometimes step in to provide extra funding for districts that need it most. But not all states have been able to keep up with that demand.
                    </p>

                    <p className="button underline">Read More</p>
                </div>

            </div>
        </BlockWrapper>
    );
};

export default SingleWithImageBlock;