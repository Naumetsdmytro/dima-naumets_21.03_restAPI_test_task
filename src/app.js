const express = require("express");
const fileRoutes = require("./routes/fileRoutes");

const app = express();

app.use(express.json());
app.use(fileRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
