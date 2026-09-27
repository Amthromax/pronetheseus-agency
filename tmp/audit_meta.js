const fs = require("fs");
const path = require("path");
const dir = "src/routes";
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".tsx"));

files.forEach((f) => {
  const code = fs.readFileSync(path.join(dir, f), "utf8");
  console.log("\n==========================================");
  console.log("ROUTE FILE:", f);
  console.log("==========================================");

  const headStart = code.indexOf("head:");
  if (headStart !== -1) {
    let headEnd = code.indexOf("}),", headStart);
    if (headEnd === -1) headEnd = headStart + 800;
    console.log(code.substring(headStart, headEnd + 3));
  } else {
    console.log("NO head() declared in this file");
  }
});
