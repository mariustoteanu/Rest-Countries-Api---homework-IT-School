function displayCurrentCountry(name) {
  fetch(europeCountries)
    .then((response) => response.json())
    .then((currentCountriesData) => {
      console.log(currentCountriesData);
      // de refacut codul acesta
      const mainContainer = document.querySelector(".main-container");
      let countryForDropDrown = currentCountriesData.filter(
        (c) => c.name.common === name
      )[0];
      console.log(name);
      // de refacut codul acesta
      const countryName = countryForDropDrown.name.common;
      const countryCapital = countryForDropDrown.capital[0];
      const countryPopulationNumers = populationNumber(
        countryForDropDrown.population
      );
      const countryCurrency = getCurrency(countryForDropDrown.currencies);
      const countryFlag = getFlag(countryForDropDrown.altSpellings[0]);

      const countrySelections = document.querySelector(".name");
      countrySelections.innerHTML = `<span class="name">${countryName}</span>`;
      const countryCapitals = document.querySelector(".capital");
      countryCapitals.innerHTML = `<span class="capital">${countryCapital}</span>`;
      const populationDisplay = document.querySelector(".population");
      populationDisplay.innerHTML = `<span class="population">${countryPopulationNumers} inhabitants </span>`;
      const countryCurrencyDisplay = document.querySelector(".currencies");
      countryCurrencyDisplay.innerHTML = `<span class="currencies">${countryCurrency}</span>`;
      const countryFlagDisplay = document.querySelector(".flag-container");
      countryFlagDisplay.innerHTML = `<img src="${countryFlag}" alt="Flag" />`;
    });
}
