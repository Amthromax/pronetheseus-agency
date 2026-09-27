import fs from "fs";
import path from "path";

const dir = "src/routes";
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".tsx"));

files.forEach((f) => {
  const code = fs.readFileSync(path.join(dir, f), "utf8");
  console.log("\n==========================================");
  console.log("ROUTE:", f);
  console.log("==========================================");

  const titleMatch = code.match(/title:\s*["']([^"']+)["']/);
  const descMatch = code.match(/name:\s*["']description["'],\s*content:\s*["']([^"']+)["']/);
  const ogTitleMatch = code.match(/property:\s*["']og:title["'],\s*content:\s*["']([^"']+)["']/);
  const ogDescMatch = code.match(/property:\s*["']og:description["'],\s*content:\s*["']([^"']+)["']/);
  const canonicalMatch = code.match(/rel:\s*["']canonical["'],\s*href:\s*(.*?)[,\}\n]/);

  console.log("title:", titleMatch ? titleMatch[1] : "NONE");
  console.log("description:", descMatch ? descMatch[1] : "NONE");
  console.log("og:title:", ogTitleMatch ? ogTitleMatch[1] : "NONE");
  console.log("og:description:", ogDescMatch ? ogDescMatch[1] : "NONE");
  console.log("canonical:", canonicalMatch ? canonicalMatch[1].trim() : "NONE");
});
