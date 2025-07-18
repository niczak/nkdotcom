import fs from "fs";
import path from "path";

// Read the built index.html
const indexPath = "./dist/index.html";
let html = fs.readFileSync(indexPath, "utf8");

// Replace absolute paths with relative paths
html = html.replace(/href="\//g, 'href="./');
html = html.replace(/src="\//g, 'src="./');

// Write the fixed HTML back
fs.writeFileSync(indexPath, html);

console.log("Fixed absolute paths in index.html");
