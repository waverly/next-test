import React from 'react';
import { BlockWrapper } from "./carouselBlockStyles";

const ImageBlock = (props) => {
    return (
        <BlockWrapper>
            <div className="image-block">
                <img src="/static/images/pool.jpg" alt="" />
                <p className="caption">Caption goes here</p>
            </div>
        </BlockWrapper>
    );
};

export default ImageBlock;