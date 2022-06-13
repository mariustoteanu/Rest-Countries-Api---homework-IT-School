function populationNumber(number) {
  let formatedPopulationNumber = new Intl.NumberFormat("ja-JP").format(number);
  return formatedPopulationNumber;
  //   console.log(formatedPopulationNumber);
}
