/*--------------------------------------------------------------------------------------------------------------------- */

const express = require("express");
const app = express();
const port = 3000;
const timeLog = require("./middlewares/timelog.js");


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/assets/"));
app.use(timeLog);

//view engine
app.set("view engine", "ejs");

//router
const router = require("./routers/router");
app.use("/", router);


// internal server error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    status: "Fail",
    errors: err.message,
  });
});

// 404 error handler
app.use((req, res, next) => {
  res.status(404).send("Sorry page nya gak ketemu gan...");
});

app.listen(port, () => {
  console.log(`Server port ${port} sudah menyala`);
});

/*--------------------------------------------------------------------------------------------------------------------- */
