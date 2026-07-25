let express = require("express");
let path = require("path");

let app = express();
let PORT = 3000;

app.use(express.static("public"));

app.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}`);
});