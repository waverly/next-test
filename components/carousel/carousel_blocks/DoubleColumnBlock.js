import React from 'react';
import { BlockWrapper } from "./carouselBlockStyles";

const DoubleColumnBlock = (props) => {
    return (
      <BlockWrapper>
        <div className="double-column-block">
          <h3>DOUBLE COLUMN TEXT BLOCK</h3>

          <div className="single-column">
            <p>
              In 2009, a northeast Philadelphia youth camp struck an
              agreement to bring a group of predominantly black and Hispanic
              children to a swimming club pool in a mostly white suburb. On
              their first visit, several children and the camp’s director
              reported hearing “disparaging” remarks, according to a lawsuit
              filed at the time, including from a white woman who said:
              “What are all these black kids doing here? They might do
              something to my child.” Before a return trip, the camp’s
              contract was revoked, according to The Times. "We have built a
              school funding system that is reliant on geography, and
              therefore the school funding system has inherited all of the
              historical ills of where we have forced and incentivized
              people to live," she says. Public schools are primarily funded
              by local and state sources — the federal government pays for
              less than 10 percent, on average, of K-12 education. States
              sometimes step in to provide extra funding for districts that
              need it most. But not all states have been able to keep up
              with that demand.
            </p>
            <a target="_blank" href="https://www.google.com">
              <p className="button underline">Read The Story</p>
            </a>
          </div>
        </div>
      </BlockWrapper>
    );
};

export default DoubleColumnBlock;