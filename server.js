const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve Disease_Burden_Hub.html as the home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Disease_Burden_Hub.html"));
});

// Serve all static files (HTML, CSS, JS, etc.)
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
