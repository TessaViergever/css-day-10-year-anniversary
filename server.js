// Import Express uit node_modules
import express, { response } from "express";

// New Express app
const app = express();

// URL data from REST API | fetch data als JSON -> variabele data
// const url = "https://cssday.nl/data.json";
// const data = await fetch(url).then((response) => response.json());
// console.log(data);

app.get("/", (request, response) => {
  fetchJson("https://cssday.nl/data.json").then((data) => {
    //fetch functie aanroepen en data ophalen
    response.render("index", { data }); //data doorsturen en pagina laden
    console.log(data);

    // const allData = data;
    // console.log(allData);

    // const year2013 = data[2013];
    // console.log(year2013);
  });
});

// Instellen EJS | 'views' map doorgeven
app.set("view engine", "ejs");
app.set("views", "./views");

// 'public' = static resources | set up public folder
app.use(express.static("./public"));

//  Index route maken
// app.get("/", function (req, res) {
//   res.render("index", data);
// });

// Poortnummer instellen
app.set("port", process.env.PORT || 8000);

// Start express + poortnummer ophalen
app.listen(app.get("port"), function () {
  // Console message + doorgeven poortnummer
  console.log(`Application started on http://localhost:${app.get("port")}`);
});

export async function fetchJson(data) {
  return await fetch(data)
    .then((response) => response.json())
    .catch((error) => error);
}

// export async function postJson(url, body) {
//   return await fetch(url, {
//     method: "post",
//     body: JSON.stringify(body),
//     headers: { "Content-Type": "application/json" },
//   })
//     .then((response) => response.json())
//     .catch((error) => error);
// }
