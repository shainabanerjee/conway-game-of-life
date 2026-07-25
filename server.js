let express = require("express");
let path = require("path");

let app = express();
let PORT = 3000;

app.use(express.static("public"));
//app.use('/js', express.static(path.join(, 'js')));


app.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}`);
});