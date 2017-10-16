fs = require("fs");
https = require("https");
http = require("http");
qs = require("querystring");

const githubServer = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";
    req.on("data", data => {
      body += data;
    });
    req.on("end", () => {
      const username = qs.parse(body).username;
      res.end(username);
    });
  }
});

githubServer.listen(8080, () => console.log("Listening on 8080"));
