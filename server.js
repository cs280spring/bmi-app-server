const fs = require("fs");

fs.readFile("./index.html", "utf8", (err, files) => {
  console.log(err ? err : files);
});
