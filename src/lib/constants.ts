const WEEK_NAME_ENG = new Map([
  [0, "Sunday"],
  [1, "Monday"],
  [2, "Tuesday"],
  [3, "Wednesday"],
  [4, "Thursday"],
  [5, "Friday"],
  [6, "Saturday"],
]);

const WEEK_NAME_NEP = new Map([
  [0, "आइतबार"],
  [1, "सोमबार"],
  [2, "मंगलबार"],
  [3, "बुधबार"],
  [4, "बिहीबार"],
  [5, "शुक्रबार"],
  [6, "शनिबार"],
]);

const WEEK_NAME_ENG_SHORT = new Map([
  [0, "Sun"],
  [1, "Mon"],
  [2, "Tue"],
  [3, "Wed"],
  [4, "Thu"],
  [5, "Fri"],
  [6, "Sat"],
]);

const WEEK_NAME_NEP_SHORT = new Map([
  [0, "आइत"],
  [1, "सोम"],
  [2, "मंगल"],
  [3, "बुध"],
  [4, "बिही"],
  [5, "शुक्र"],
  [6, "शनि"],
]);

const NEPALI_MONTHS_NAME = new Map([
  [1, "वैशाख"],
  [2, "जेष्ठ"],
  [3, "असार"],
  [4, "श्रावण"],
  [5, "भाद्र"],
  [6, "असोज"],
  [7, "कार्तिक"],
  [8, "मंसिर"],
  [9, "पुष"],
  [10, "माघ"],
  [11, "फाल्गुन"],
  [12, "चैत्र"],
]);

const ENGLISH_MONTHS_NAME = new Map([
  [1, "Baisakh"],
  [2, "Jestha"],
  [3, "Ashad"],
  [4, "Shrawan"],
  [5, "Bhadra"],
  [6, "Ashwin"],
  [7, "Kartik"],
  [8, "Mangsir"],
  [9, "Poush"],
  [10, "Magh"],
  [11, "Falgun"],
  [12, "Chaitra"],
]);

const ENG_NEP_NUMBERS = new Map([
  [0, "०"],
  [1, "१"],
  [2, "२"],
  [3, "३"],
  [4, "४"],
  [5, "५"],
  [6, "६"],
  [7, "७"],
  [8, "८"],
  [9, "९"],
]);

const NEP_ENG_NUMBERS = new Map([
  ["०", 0],
  ["१", 1],
  ["२", 2],
  ["३", 3],
  ["४", 4],
  ["५", 5],
  ["६", 6],
  ["७", 7],
  ["८", 8],
  ["९", 9],
]);

export {
  NEPALI_MONTHS_NAME,
  ENGLISH_MONTHS_NAME,
  ENG_NEP_NUMBERS,
  NEP_ENG_NUMBERS,
  WEEK_NAME_ENG,
  WEEK_NAME_NEP,
  WEEK_NAME_ENG_SHORT,
  WEEK_NAME_NEP_SHORT,
};
