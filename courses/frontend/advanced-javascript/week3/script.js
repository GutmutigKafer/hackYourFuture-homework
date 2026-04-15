let currencyFrom = "EUR";
let currencyTo = "DKK";

const inputAmount = document.getElementById("input-amount");
const inputCurrency = document.getElementById("input-currency");
const outputAmount = document.getElementById("output-amount");
const outputCurrency = document.getElementById("output-currency");

const fetchRatesForCurrency = async (currency) => {
  const response = await fetch(`https://open.er-api.com/v6/latest/${currency}`);
  const body = await response.json();
  const rates = body.rates;
  return rates;
};

const init = async () => {
  inputAmount.value = 1;

  const currencyObject = await fetchRatesForCurrency(currencyFrom);
  const entries = Object.entries(currencyObject);

  entries.forEach((_, i) => {
    const optionInput = document.createElement("option");
    inputCurrency.appendChild(optionInput);

    if (i > 0) {
      const optionOutput = document.createElement("option");
      outputCurrency.appendChild(optionOutput);
    }
  });

  setCurrencyRates(entries);
  calculateConversion({ currentTarget: inputAmount });
};

const setCurrencyRates = (entries) => {
  const inputOptions = [...inputCurrency.options];
  const outputOptions = [...outputCurrency.options];
  entries.forEach((one, i) => {
    inputOptions[i].textContent = one[0];
  });

  outputOptions.forEach((one, i) => {
    const entry = entries[i + 1];
    one.textContent = entry[0];
    one.dataset.rate = entry[1];

    if (entry[0] === currencyTo) {
      one.setAttribute("selected", "selected");
      outputAmount.value = entry[1];
    } else {
      one.removeAttribute("selected");
    }
  });
};

const calculateConversion = (event) => {
  const selectedOption = outputCurrency.options[outputCurrency.selectedIndex];

  if (!selectedOption) return;
  const multiplier = Number.parseFloat(selectedOption.dataset.rate);

  const isInputChange = event.currentTarget === inputAmount;
  const currentField = isInputChange ? inputAmount : outputAmount;
  const currentValue = currentField.value.trim();

  if (currentValue === "" || Number.isNaN(Number.parseFloat(currentValue))) {
    if (isInputChange) {
      outputAmount.value = "";
    } else {
      inputAmount.value = "";
    }
    return;
  }

  const currentNumber = Number.parseFloat(currentValue);

  let result;
  if (isInputChange) {
    result = currentNumber * multiplier;
    if (result) outputAmount.value = result.toFixed(6);
  } else {
    result = currentNumber / multiplier;
    if (result) inputAmount.value = result.toFixed(6);
  }
};

await init();

inputAmount.addEventListener("input", (event) => {
  calculateConversion(event);
});

outputAmount.addEventListener("input", (event) => {
  calculateConversion(event);
});

inputCurrency.addEventListener("change", async (event) => {
  currencyFrom = event.target.value;

  const currencyObject = await fetchRatesForCurrency(currencyFrom);
  const entries = Object.entries(currencyObject);

  setCurrencyRates(entries);
  calculateConversion({ currentTarget: inputAmount });
});

outputCurrency.addEventListener("change", (event) => {
  currencyTo = event.target.value;
  calculateConversion({ currentTarget: inputAmount });
});
