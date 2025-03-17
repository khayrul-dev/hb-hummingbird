import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const srcDir = "src/styles";
const outDir = "lib/styles";

const extraFiles = ["src/style.css"];

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
if (!fs.existsSync("lib")) fs.mkdirSync("lib", { recursive: true });

const processCSS = (inputFile, outputDir) => {
  if (!fs.existsSync(inputFile)) {
    console.error(`File not found: ${inputFile}`);
    return;
  }

  const fileName = path.basename(inputFile);
  const outputFile = path.join(outputDir, fileName);

  console.log(`Processing & Minifying: ${inputFile} -> ${outputFile}`);
  execSync(
    `npx postcss ${inputFile} -o ${outputFile} --config postcss.config.mjs`,
    { stdio: "inherit" }
  );
};

fs.readdirSync(srcDir)
  .filter((file) => file.endsWith(".css"))
  .forEach((file) => processCSS(path.join(srcDir, file), outDir));

extraFiles.forEach((file) => processCSS(file, "lib"));

console.log("CSS processing & minification complete!");
