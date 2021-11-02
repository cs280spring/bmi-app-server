const fs = require("fs/promises");

async function _readdir(path) {
  try {
    const files = await fs.readdir(path);
    console.log(files);
  } catch (err) {
    console.log(err);
  }
}

_readdir("./");
