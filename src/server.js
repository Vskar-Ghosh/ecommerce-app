const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose
  .connect(
    "mongodb+srv://salim:salim1234@cluster0.bgtyqbe.mongodb.net/ecommerce?retryWrites=true&w=majority"
  )
  .then(() => {
    app.get("/", (req, res) => {
      res.send("Ecommerce Setup done");
    });

    const userRoutes = require("./routes/user_routes");
    app.use("/api/user", userRoutes);
  });

const PORT = 5000;

app.listen(PORT, (req, res) => {
  console.log(`Server started at PORT: ${PORT}`);
});
