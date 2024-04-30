// Function to fetch data from the API
async function fetchData() {
  try {
    const response = await fetch("https://cssday.nl/data.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Function to render data in cards
async function renderData() {
  const container = document.querySelector(".container");
  const data = await fetchData();

  if (!data) {
    return;
  }

  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = item.title;

    const body = document.createElement("p");
    body.textContent = item.body;

    card.appendChild(title);
    card.appendChild(body);
    container.appendChild(card);
  });
}

// Call the renderData function to display data
renderData();

// function fetchData() {
//   fetch("https://cssday.nl/data.json")
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error(`HTTP error! Status: ${res.status}`);
//       }
//       return res.json();
//     })
//     .then((data) => console.log(data))
//     .catch((error) => console.error("Unable to fetch data:", error));
// }
// fetchData();

// // Function to render data on page
// async function renderData() {
//   const dataSection = document.querySelector("dataSection");
//   const data = await fetchData();

//   if (!data) {
//     return;
//   }
// }

// // Call the renderData function to display data
// renderData();

// fetch("https://cssday.nl/data.json")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     data.forEach((year) => {
//       const markup = `<li>${year.title}</li>`;
//       document.querySelector("ul").insertAdjacentHTML("beforeend", markup);
//     });
//     console.log(data);
//   });

const listElement = document.querySelector("h3");
function fetchData() {
  fetch("https://cssday.nl/data.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.forEach((data) => {
        listElement.insertAdjacentHTML("beforeeend", `<h3>${2013}</h3>`);
      });
    });
}
