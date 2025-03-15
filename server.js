const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let keys = ["admin123", "premium456", "vip789"]; // Add valid access keys

app.post("/validate-key", (req, res) => {
  const { key } = req.body;
  if (keys.includes(key)) {
    res.json({ success: true, message: "Key is valid!" });
  } else {
    res.json({ success: false, message: "Invalid Key!" });
  }
});

app.get("/predict", (req, res) => {
  const prediction = Math.random() > 0.5 ? "WIN" : "LOSS"; // Example AI logic
  res.json({ prediction });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
