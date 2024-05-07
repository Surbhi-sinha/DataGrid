const express = require("express");
const fs = require("fs").promises;
const cors = require("cors");

const app = express();
const PORT = 8080;
app.use(cors());
async function loadData() {
  const data = fs.readFile(
    "aqidataset.json",
    { encoding: "utf-8" },
    (err, data) => {
      console.log(err);
    }
  );
  console.log(data);
  return data;
}

//test data
async function loadTestData() {
  const data = fs.readFile(
    "TestData.json",
    { encoding: "utf-8" },
    (err, data) => {
      console.log(err);
    }
  );
  console.log(data);
  return data;
}
let rows;
let cols;
app.get("/data", async (req, res, err) => {
  if (err) {
    console.log(err);
  }
  rows = parseInt(req.query.rows);
  cols = parseInt(req.query.cols);

  let result = await loadData();
  let data = JSON.parse(result);
  res.json({ data: data , rows:rows , cols : cols});
});

app.get("/testdata", async (req, res, err) => {
  if (err) {
    console.log(err);
  }
  rows = parseInt(req.query.rows);
  cols = parseInt(req.query.cols);

  let result = await loadTestData();
  let data = JSON.parse(result);
  res.json({ data: data , rows:rows , cols : cols});
});

app.listen(PORT, () => {
  console.log(`successfully running at port : http://localhost:${PORT}/data?rows=${rows}&cols=${cols}`);
});
