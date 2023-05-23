const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const inputElement = document.querySelector("input");
const fetchedData = [];

const addFetchedDataToArray = function (fetchedDataItems) {
  if (!fetchedDataItems) {
    return;
  }
  for (const dataItem of fetchedDataItems) {
    fetchedData.push(dataItem);
  }
};

const findMatch = function () {
  const inputValue = inputElement.value.toLowerCase();
  const matchedResults = [];
  if (inputValue === "") {
    displayResults();
    return;
  }
  for (dataItem of fetchedData) {
    if (dataItem.city.toLowerCase().includes(inputValue)) {
      matchedResults.push(dataItem.city);
    } else if (dataItem.state.toLowerCase().includes(inputValue)) {
      matchedResults.push(dataItem.state);
    }
  }
  // const uniqueResults1 = [...new Set(matchedResults)]; // one way to remove duplicates

  //second way to remove duplicates
  const uniqueResults2 = matchedResults.filter((item, index) => {
    return matchedResults.indexOf(item) === index;
  });

  displayResults(uniqueResults2);
};

const displayResults = function (matchedResults) {
  const list = document.querySelector("ul");
  list.innerHTML = "";

  if (!matchedResults) {
    list.innerHTML = `<li>Filter for a city</li>
    <li>or a state</li>`;
    return;
  }
  for (const result of matchedResults) {
    const listElement = document.createElement("li");
    listElement.textContent = result;
    list.appendChild(listElement);
  }
};

fetch(endpoint)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    addFetchedDataToArray(response);
  })
  .catch((error) => {
    alert(error);
  });

inputElement.addEventListener("input", findMatch);
