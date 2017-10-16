const fs = require("fs");
const http = require("http");

// fs.readFile("./animals.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log(data);
//   }
// });

// fs.writeFile("./example.txt", "I will be written to example.txt", err => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log("file successfully created");
//   }
// });

// let letter = process.argv[2];
// let animals = [];

// fs.readFile("./animals.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     dataArr = data.toString().split("\n");
//     dataArr.forEach(animal => {
//       if (animal[0].toLowerCase() === letter) {
//         animals.push(animal);
//       }
//     });
//     writeAnimals(letter, animals.join("\n"));
//   }
// });

// const writeAnimals = (letter, animals) => {
//   fs.writeFile(`./${letter}_animals.txt`, animals);
// };

const server = http.createServer((req, res) => {
  res.write("hello world");
  res.end();
});

server.listen(8000, () => console.log("I'm listening on port 8000!"));
