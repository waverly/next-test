import App, { Container } from "next/app";
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "styles/themes";
import { globalStyles } from "styles/global";

const GlobalStyle = createGlobalStyle`
	${globalStyles}
`;

export default class MyApp extends App {
  
  state = {
    width: 0
  };

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  componentDidMount() {
    // ReactGA.initialize("UA-132993665-1");
    // ReactGA.pageview(window.location.pathname + window.location.search);

    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);

    this.timeOut = setTimeout(() => {
      this.setState({ loaded: true });
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeOut);
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} width={this.state.width} height={this.state.height} theme={theme} />
        </ThemeProvider>
        <GlobalStyle />
      </Container>
    );
  }
}
