import React, { createContext, Component } from "react";
// import { withRouter } from "react-router";
// import * as R from "ramda";

export const clickPosition = event => {
  
}

export const generateKey = pre => {
  return `${pre}_${new Date().getTime()}`;
};

// export const fetchJson = async (lang, updateFx) => {
//   if (lang.length > 0 && lang !== " ") {
//     fetch(`../data/${lang}.json`)
//       .then(response => {
//         const charStatus = response.status.toString().charAt(0);
//         if (charStatus === "2" || charStatus === "3") {
//           return response.json();
//         } else {
//           throw Error(response.statusText);
//         }
//       })
//       .then(responseData => {
//         updateFx(responseData);
//         return;
//       })
//       .catch(function (err) {
//         console.log(err);
//       });
//   }
// };

// export const pickBy = (id, t) => R.pickBy((val, key) => key.includes(id), t);

export const AppContext = createContext();

const mapData = item => {
  return (
    <span key={item}>
      {item}
      <br />
    </span>
  );
};

export const scrubTerms = (sentence, fragment) => {
  if (fragment) {
    const firstSlice = R.slice(0, sentence.indexOf(fragment), sentence);
    const secondSlice = R.slice(
      sentence.indexOf(fragment) + fragment.length,
      sentence.length,
      sentence
    );
    const a1Open = `<a
                      rel='noopener noreferrer'
                      target='_blank'
                      href='https://supercell.com/en/terms-of-service/'>`;
    const a1Close = "</a>";
    const output = `${firstSlice} ${a1Open}${fragment}${a1Close}${secondSlice}`;
    return { __html: output };
  }
};

// export const scrubPrivacyPolicy = (sentence, privacy, terms) => {
//   if ((sentence, privacy, terms)) {
//     let first;
//     let second;

//     if (sentence.indexOf(privacy) > sentence.indexOf(terms)) {
//       first = terms;
//       second = privacy;
//     } else {
//       first = privacy;
//       second = terms;
//     }

//     const firstSlice = R.slice(0, sentence.indexOf(first), sentence);
//     const secondSlice = R.slice(
//       sentence.indexOf(first) + first.length,
//       sentence.indexOf(second),
//       sentence
//     );

//     const thirdSlice = R.slice(
//       sentence.indexOf(second) + second.length,
//       sentence.length,
//       sentence
//     );
//     const a1Open = `<a
//                       rel='noopener noreferrer'
//                       target='_blank'
//                       href='https://policies.google.com/privacy'>`;
//     const a1Close = "</a>";
//     const a2Open = `<a
//                       rel='noopener noreferrer'
//                       target='_blank'
//                       href='https://policies.google.com/terms'>`;
//     const a2Close = "</a>";
//     const output = `${firstSlice} ${a1Open} ${privacy} ${a1Close} ${secondSlice} ${a2Open} ${terms} ${a2Close} ${thirdSlice}`;
//     return { __html: output };
//   }
// };

// export const footerAddressSplit = dataToSplit => {
//   if (dataToSplit && dataToSplit.includes("\r\n")) {
//     return R.map(mapData, R.split("\r\n", dataToSplit));
//   } else {
//     return dataToSplit;
//   }
// };

// export const lineSplit = dataToSplit => {
//   if (dataToSplit && dataToSplit.includes("\n")) {
//     return R.map(mapData, R.split("\n", dataToSplit));
//   } else {
//     return dataToSplit;
//   }
// };

// export class ScrollToTop extends Component {
//   componentDidUpdate(prevProps) {
//     if (this.props.location !== prevProps.location) {
//       window.scrollTo(0, 0);
//     }
//   }

//   render() {
//     return this.props.children;
//   }
// }

// export default withRouter(ScrollToTop);
