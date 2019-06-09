import React, { Component, Fragment } from "react";
import { BlockContainer, CarouselWrap } from './carouselStyles'
import { DateBlock, DoubleColumnBlock, ImageBlock, QuoteBlock, SingleColumnBlock, SingleWithImageBlock } from './carousel_blocks';

class Carousel extends Component {

  render() {
    return (
      <CarouselWrap>
        <BlockContainer translate={`${this.props.translate}vw`} numBlocks={this.props.numBlocks}>
          <DateBlock />
          <DoubleColumnBlock />
          <SingleWithImageBlock />
          <ImageBlock/>
          <SingleColumnBlock />
          <QuoteBlock />
        </BlockContainer>
      </CarouselWrap>
    );
  }
}

export default Carousel;
