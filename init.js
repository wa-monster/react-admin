const fs = require("fs");

const items = fs.readdirSync("./public/image/gallery");
console.log("items", items);
const itemNameArr = items;
const file = fs.readdirSync("./public/image/gallery");
