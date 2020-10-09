const button = document.querySelector("button");

const url = "https://the-one-api.dev/v2/quote";
const bearer = "Bearer nc37OggecSV0auF8e4yu";

button.addEventListener("click", getQuote);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getQuote() {
  fetch(url, {
    headers: {
      Authorization: bearer,
    },
  })
    .then((res) => {
      if (res.ok) {
        console.log("success");
      } else {
        console.log("ERROR");
      }
      return res.json();
    })
    .then((data) => displayQuote(data.docs[getRandomInt(1000)].dialog));
}

function displayQuote(quote) {
  const p = document.querySelector("p");
  p.innerText = '"' + quote + '"';
}
