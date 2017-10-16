const fs = require("fs");
const http = require("http");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  query = querystring.parse(req.url.slice(1));

  let animals = [];

  fs.readFile("./animals.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      res.write("error");
    } else {
      if (query.letter === "") {
        res.write(data);
      } else {
        let dataArr = data.split("\n");
        dataArr.forEach(animal => {
          if (animal[0].toLowerCase() === query.letter) {
            animals.push(animal);
          }
        });
        res.write(animals.join("\n"));
      }
    }

    res.end();
  });
});

server.listen(8001, () => console.log("I'm listening on port 8000!"));

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
