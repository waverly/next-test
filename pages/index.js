import React, { Component, Fragment } from "react";
import IntroSection from "components/intro_section";
import ChapterSection from "components/chapter_section";
import { PageWrap } from "./pageStyles";

const data = {
  chapterOne: {
    background: "/static/images/sitting.jpg",
    number: 1,
    title: "Unconscious Bias"
  },
  chapterTwo: {
    background: "/static/images/taxi.jpg",
    number: 2,
    title: "Staying Afloat"
  },
  chapterThree: {
    background: "/static/images/pool.jpg",
    number: 3,
    title: "Finding a seat"
  }
};

    
class Home extends Component {
  state = {
    loaded: false
  };

  scrollDown = () => {
    this.pageWrap.scroll({
      top: this.pageWrap.scrollTop + window.innerWidth,
      left: 0,
      behavior: "smooth"
    });
  }

  render() {
    const { width } = this.props;

    return (
      <Fragment>
        <PageWrap
          loaded={this.state.loaded}
          onScroll={this.onScroll}
          ref={component => (this.pageWrap = component)}
        >
          <IntroSection />
          <ChapterSection
            data={data.chapterOne}
            scrollDown={this.scrollDown}
            {...this.props}
          />
          <ChapterSection
            data={data.chapterTwo}
            scrollDown={this.scrollDown}
            {...this.props}
          />
          <ChapterSection
            data={data.chapterThree}
            scrollDown={this.scrollDown}
            {...this.props}
          />
        </PageWrap>
      </Fragment>
    );
  }
}

export default Home;
