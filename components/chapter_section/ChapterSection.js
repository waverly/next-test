import React, { Component, Fragment } from "react";
import Carousel from "components/carousel";
import { Background, SectionWrap, TextBlock } from "./chapterSectionStyles";
import { DownIndicator, MobileArrow, SlideOneArrow } from "./ChapterSectionComponents";
// import { AppContext } from "utils/helpers";

class ChapterSection extends Component {
  state = {
    carouselWidth: 0,
    slideWidth: 0,
    translate: 0,
    numBlocks: 6,
    side: null
  };

  mobile = false;
  componentDidMount() {
    // TODO: pull in variable from theme of carousel width
    this.recalculate();
    window.addEventListener("resize", this.recalculate);
    this.mobile = this.props.width < 768;
  }

  componentDidUpdate(prevProps, prevState) {

    if (this.props.width !== prevProps.width) {
      this.recalculate();

      if (prevProps.width >= 768 && this.props.width < 768 && !this.mobile) {
        this.setState({
          translate: (this.state.translate / 70) * 100
        });
        this.mobile = true;
      } else if (
        prevProps.width <= 768 &&
        this.props.width > 768 &&
        this.mobile
      ) {
        this.setState({
          translate: (this.state.translate / 100) * 70
        });
        this.mobile = false;
      }
    }
  }

  onClick = (nativeEvent, width) => {
    if (nativeEvent.target.parentElement.tagName !== "A") {
      if (
        Math.abs(this.state.translate) < this.state.carouselWidth - 30 &&
        this.state.side === "right"
      ) {
        this.setState({
          translate: this.state.translate - this.state.slideWidth
        });
      } else if (
        Math.abs(this.state.translate) > 0 &&
        this.state.side === "left"
      ) {
        this.setState({
          translate: this.state.translate + this.state.slideWidth
        });
      }
    }
  };

  mobileCarouselMove = direction => {
    if (
      Math.abs(this.state.translate) < this.state.carouselWidth - 30 &&
      direction === "next"
    ) {
      this.setState({
        translate: this.state.translate - this.state.slideWidth
      });
    } else if (direction === "prev") {
      this.setState({
        translate: this.state.translate + this.state.slideWidth
      });
    }
  };

  onMouseMove = (nativeEvent, width) => {
    const { x } = nativeEvent;
    const side = x < width / 2 ? "left" : "right";
    if (this.state.side !== side) {
      this.setState({ side });
    }
  };

  recalculate = () => {
    if (this.props.width < 768) {
      this.state.slideWidth = 100;
      this.state.carouselWidth =
        this.state.slideWidth * this.state.numBlocks + 30;
    } else {
      this.state.slideWidth = 70;
      this.state.carouselWidth =
        this.state.slideWidth * this.state.numBlocks + 30;
    }
  };

  render() {
    const { data, width } = this.props;


    if (data) {
      return (
        <SectionWrap
          style={{
            cursor:
              this.state.side === "left" &&
              width > 768 &&
              this.state.translate !== 0
                ? "url(/static/images/mouse-left.png), auto"
                : width > 768
                ? "url(/static/images/mouse-right.png), auto"
                : "auto"
          }}
          onClick={e =>
            width >= 768 && this.onClick(e.nativeEvent, width)
          }
          onMouseMove={e => this.onMouseMove(e.nativeEvent, width)}
          first={data.number === 1}
          translate={this.state.translate}
        >
          <div onClick={this.props.scrollDown}>
            <DownIndicator shouldDisplay={this.state.translate !== 0 && Math.abs(this.state.translate) === (this.state.numBlocks * this.state.slideWidth)} />
          </div>

          <Carousel
            numBlocks={this.state.numBlocks}
            translate={this.state.translate}
          />
          <TextBlock align="left" shouldDisplay={this.state.translate === 0}>
            <p className="button">Chapter {data.number}.</p>
            <h1>{data.title}</h1>
          </TextBlock>

          {/* mobile arrows on load */}

          <div onClick={() => this.mobileCarouselMove("next")}>
            <SlideOneArrow shouldDisplay={this.state.translate === 0} />
          </div>

          {/* mobile arrows during slideshow */}
          <MobileArrow
            onClick={() => this.mobileCarouselMove("prev")}
            side="left"
            rotate="180deg"
            position="bottom"
            width="10px"
            shouldDisplay={this.state.translate !== 0}
          />
          <MobileArrow
            onClick={() => this.mobileCarouselMove("next")}
            side="right"
            rotate="0deg"
            position="bottom"
            width="10px"
            shouldDisplay={this.state.translate !== 0}
          />
          <Background
            background={data.background}
            shouldDisplay={this.state.translate === 0}
          />
        </SectionWrap>
      );
    } else {
      return null;
    }
  }
}

export default ChapterSection;
