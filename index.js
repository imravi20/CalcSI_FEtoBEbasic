const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/calculateInterest", (req, res) => {
  const p = parseFloat(req.query.p);
  const r = parseFloat(req.query.r);
  const t = parseFloat(req.query.t);

  const interest = (p * r * t) / 100;
  const total = p + interest;

  res.send({ total: total, interest: interest });
});

app.listen(3000);
