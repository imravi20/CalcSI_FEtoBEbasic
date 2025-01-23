const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/calculateInterest", (req, res) => {
  const p = parseFloat(req.body.prin);
  const r = parseFloat(req.body.rate);
  const t = parseFloat(req.body.time);

  const interest = (p * r * t) / 100;
  const total = p + interest;

  res.send({ total: total, interest: interest });
});

app.listen(3000);
