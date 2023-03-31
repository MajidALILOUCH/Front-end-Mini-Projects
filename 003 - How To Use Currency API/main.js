fetch(
  "https://api.freecurrencyapi.com/v1/latest?apikey=19kDv9uHaGNOscN92ptE1Wxkocf3Wii3RUTMpuHy"
)
  .then((result) => {
    let myData = result.json();
    return myData;
  })
  .then((currency) => {
    // console.log(currency.data); to the API data

    let amount = document.querySelector(".amount");
    let euroPrice = document.querySelector(".euro span");

    amount.oninput = function () {
      euroPrice.innerHTML = (amount.value * currency.data["EUR"]).toFixed(2);
    };
  })
  .catch((reject) => console.log(Error`${reject}: your API is wrong`));
