const fs = require("fs");

let out = "";
// ex. C#mM7: "../assets/chord/DbmM7.png"

const prefix = "../assets/chord";
const postfix = ".png";

fs.writeFile("./out_chord_names_to_file_location.txt", out, (err) => {
  if (err) {
    console.error(err);
  }
});
