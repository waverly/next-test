import React from "react";
import styled from "styled-components";
import { media } from "styles/style-utils";
import {
  AppContext,
  pickBy,
  scrubPrivacyPolicy,
  footerAddressSplit
} from "utils/helpers";

const FooterWrapper = styled.footer`
  width: 100vw;
  min-height: 300px;
  background: black;
  text-align: center;
  padding: 37px;
  * {
    color: white;
  }

  .link-wrapper {
    display: flex;
    margin-left: 0;
    padding-bottom: 37px;

    li {
      margin: 0 20px 0 0;
      padding: 0;
      font-family: "SupercellText-Medium", Helvetica, Arial, sans-serif;
      font-size: 13px;
      line-height: 1em;
      min-width: max-content;
    }

    .privacy-terms {
      margin-left: auto;
      text-align: right;
      margin-right: 0;
      min-width: auto;
      line-height: 1.4;
    }

    ${media.handheld`
      .privacy-terms {
        text-align: left;
        max-width: 250px;
        margin-right: auto;
        margin-left: 0;
      }
    `}
  }

  .address-wrapper {
    color: #666;
    font-family: "SupercellText-Medium", Helvetica, Arial, sans-serif;
    font-size: 13px;
    text-align: left;
    span {
      display: block;
      font-style: normal;
      color: grey;
      line-height: 1.5;
    }
  }

  .bottom-row {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .logo {
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 54px;
    height: 46px;
    text-indent: -9999px;
    outline: none;
    background: url(//cdn.supercell.com/supercell.com/190107092152/all/themes/supercell/img/logo_supercell@2x.png)
      no-repeat;
    background-size: 54px 44px;
  }

  ${media.handheld`
    padding: 37px 14px;

    .link-wrapper {
      flex-direction: column;
      align-items: flex-start;
      li{
        margin-bottom: 18px;
        font-size: 14px;
      }
    }
  `}
`;

const Footer = () => {
  return (
    <AppContext.Consumer>
      {({ text, language }) => {
        const footerText = pickBy("footer_", text);
        const {
          footer_2,
          footer_3,
          footer_4,
          footer_5,
          footer_privacy,
          footer_single_privacy,
          footer_single_terms,
          footer_address
        } = footerText;

        const totalPrivacy = scrubPrivacyPolicy(
          footer_privacy,
          footer_single_privacy,
          footer_single_terms
        );

        const linkLanguage = (language, linkType) => {
          if (language === "ja") {
            return "jp";
          } else if (language === "zh") {
            return "cn";
          } else if (language === "id") {
            if (linkType !== "terms" && linkType !== "privacy") {
              return language;
            } else {
              return "";
            }
          } else if (language !== "en") {
            return language;
          } else {
            return "";
          }
        };

        if (footerText && footer_privacy) {
          return (
            <FooterWrapper>
              <div className="link-wrapper">
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={`https://supercell.com/en/terms-of-service/${linkLanguage(
                      language, "terms")}`}
                  >
                    {footer_2}
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={`https://supercell.com/en/privacy-policy/${linkLanguage(
                      language,"privacy")}`}
                    title=""
                  >
                    {footer_3}
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={`https://supercell.com/en/parents/${linkLanguage(
                      language
                    )}`}
                  >
                    {footer_4}
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={`https://supercell.com/en/safe-and-fair-play/${linkLanguage(
                      language
                    )}`}
                  >
                    {footer_5}
                  </a>
                </li>

                <li
                  className="privacy-terms"
                  dangerouslySetInnerHTML={totalPrivacy}
                />
              </div>
              <div className="bottom-row">
                <div className="address-wrapper">
                  <address>{footerAddressSplit(footer_address)}</address>
                </div>
                <a className="logo" href="https://supercell.com/en/">
                  Supercell
                </a>
              </div>
            </FooterWrapper>
          );
        }
      }}
    </AppContext.Consumer>
  );
};

export default Footer;
