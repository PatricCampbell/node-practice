fs = require("fs");
https = require("https");
http = require("http");
querystring = require("querystring");

const githubServer = http.createServer((req, res) => {
  if (req.method === "POST") {
    res.end("I'm a post request!");
  } else {
    res.end("Danger, not a post request!");
  }
});

githubServer.listen(8080, () => console.log("Listening on 8080"));
