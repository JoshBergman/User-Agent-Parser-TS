// DATA LOCATIONS:
// All KEYWORDS are stored in gatherKeywords.ts, hardcoded into the switch case.
// Keyword combinations to BROWSER IDENTIFICATIONS is in identify.ts

// Intended plan:
// 1. get an array of keywords relevant to identifying the browser
// 3. check for the "Mobi" string -> device type
// 2. compare keywords to most likely browser -> browser

import { gatherKeywords } from "./gatherKeywords";
import { identifyBrowser } from "./identify";
import * as userAgents from "./userAgents.json";

const parse_user_agent = (
  user_agent_string: string
): [browser: string, isMobile: boolean] => {
  const keywords = gatherKeywords(user_agent_string);

  let isMobile = false;
  if (keywords.includes("mobi")) {
    keywords.splice(keywords.indexOf("mobi"), 1);
    isMobile = true;
  }

  const browser = identifyBrowser(keywords);
  return [browser, isMobile];
};

// userAgents.forEach((userAgent) => console.log(parse_user_agent(userAgent)));

const counter = { browser: {}, device: { mobile: 0, desktop: 0 } };
for (let i = 0; i < userAgents.length; i++) {
  const [browser, isMobile] = parse_user_agent(userAgents[i]);
  if (counter.browser[browser]) {
    counter.browser[browser] += 1;
  } else {
    counter.browser[browser] = 1;
  }
  if (isMobile) {
    counter.device.mobile += 1;
  } else {
    counter.device.desktop += 1;
  }
}

console.log(counter);
