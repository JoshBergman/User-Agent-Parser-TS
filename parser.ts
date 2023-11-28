// DATA LOCATIONS:
// All KEYWORDS are stored in gatherKeywords.ts, hardcoded into the switch case.
// Keyword combinations to BROWSER IDENTIFICATIONS is in identify.ts

// Intended plan:
// 1. get an array of keywords relevant to identifying the browser
// 3. check for the "Mobi" string -> device type (remove any possible Mobi from keywords as well)
// 2. compare keywords to most likely browser -> browser

import { gatherKeywords } from "./gatherKeywords";

const parse_user_agent = (user_agent_string: string) => {
  const keywords = gatherKeywords(user_agent_string);
  return keywords;
};
console.log(
  parse_user_agent(
    "Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30"
  )
);
