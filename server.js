const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = "5500";
const bodyParser = require("body-parser");
app.use(express.json());
app.post("/sum", (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  const sum = a + b;
  res.json({ sum });
});
app.listen(port, () => {
  console.log("Server is running");
});
