const italyOption = document.querySelector(".select-country.italy");
const icelandOption = document.querySelector(".select-country.iceland");
const irelandOption = document.querySelector(".select-country.ireland");
const montenegroOption = document.querySelector(".select-country.montenegro");
const bosniaOption = document.querySelector(".select-country.bosnia");
const romaniaOption = document.querySelector(".select-country.romania");
const spainOption = document.querySelector(".select-country.spain");
const russianOption = document.querySelector(".select-country.russian");
const franceOption = document.querySelector(".select-country.france");
const moldaviaOption = document.querySelector(".select-country.moldavia");
const latvianOption = document.querySelector(".select-country.latvian");
const kosovoOption = document.querySelector(".select-country.kosovo");
const swisOption = document.querySelector(".select-country.swis");
const jerseyOption = document.querySelector(".select-country.jersey");
const ukraineOption = document.querySelector(".select-country.ukraine");
const czechiaOption = document.querySelector(".select-country.czechia");
const alandOption = document.querySelector(".select-country.aland");
const monacoOption = document.querySelector(".select-country.monaco");
const denmarkOption = document.querySelector(".select-country.denmark");
const polandOption = document.querySelector(".select-country.poland");
const maltaOption = document.querySelector(".select-country.malta");
const sanmarinoOption = document.querySelector(".select-country.san-marino");
const bulgariaOption = document.querySelector(".select-country.bulgaria");
const swedenOption = document.querySelector(".select-country.sweden");
const isleOfManOption = document.querySelector(".select-country.isle-of-Man");
const netherlandsOption = document.querySelector(".select-country.netherlands");
const norwayOption = document.querySelector(".select-country.norway");
const albaniaOption = document.querySelector(".select-country.albania");
const germanyOption = document.querySelector(".select-country.germany");
const hungaryOption = document.querySelector(".select-country.hungary");
const guernseyOption = document.querySelector(".select-country.guernsey");
const svalbardOption = document.querySelector(
  ".select-country.svalbard-and-jan-mayen"
);
const slovakiaOption = document.querySelector(".select-country.slovakia");
const belarusOption = document.querySelector(".select-country.belarus");
const greeceOption = document.querySelector(".select-country.greece");
const sloveniaOption = document.querySelector(".select-country.slovenia");
const finlandOption = document.querySelector(".select-country.finland");
const andorraOption = document.querySelector(".select-country.andorra");
const belgiumOption = document.querySelector(".select-country.belgium");
const liechtensteinOption = document.querySelector(
  ".select-country.liechtenstein"
);
const austriaOption = document.querySelector(".select-country.austria");
const lithuaniaOption = document.querySelector(".select-country.lithuania");
const englandOption = document.querySelector(".select-country.england");
const luxemburgOption = document.querySelector(".select-country.luxemburg");
const vaticanOption = document.querySelector(".select-country.vatican");
const portugalOption = document.querySelector(".select-country.portugal");
const gibraltarOption = document.querySelector(".select-country.gibraltar");
const cyprusOption = document.querySelector(".select-country.cyprus");
const estoniaOption = document.querySelector(".select-country.estonia");
const feroeOption = document.querySelector(".select-country.feroe-island");
const croatiaOption = document.querySelector(".select-country.croatia");
const northMacedoniaOption = document.querySelector(
  ".select-country.north-macedonia"
);

const dropdownButton = document.querySelector("#dropdown-country");
// const currentCountryLS = localStorage.getItem("name");
// if (currentCountryLS === null) {
//   currentCountryLS = "Italy";
// }
// console.log(currentCountryLS);

function displayCurrentCountryDropDown() {
  // localStorage.setItem("capital", capital);
  return displayCurrentCountry(dropdownButton.value);
}

dropdownButton.addEventListener("click", displayCurrentCountryDropDown);
