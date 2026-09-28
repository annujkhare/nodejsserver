const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

function sendFile(filePath, contentType, res, statusCode = 200) {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Something went wrong on the server.");
      return;
    }

    res.writeHead(statusCode, {
      "Content-Type": contentType
    });

    res.end(data);
  });
}


const server = http.createServer((req, res) => {
  console.log("User requested:", req.url);

  
  if (req.url === "/" || req.url === "/home") {
    const homePage = path.join(__dirname, "pages", "home.html");
    sendFile(homePage, "text/html", res);

  
  } else if (req.url === "/about") {
    const aboutPage = path.join(__dirname, "pages", "about.html");
    sendFile(aboutPage, "text/html", res);

  
  } else if (req.url === "/contact") {
    const contactPage = path.join(__dirname, "pages", "contact.html");
    sendFile(contactPage, "text/html", res);

  
  } else if (req.url === "/style.css") {
    const cssFile = path.join(__dirname, "public", "style.css");
    sendFile(cssFile, "text/css", res);

  
  } else {
    const errorPage = path.join(__dirname, "pages", "404.html");
    sendFile(errorPage, "text/html", res, 404);
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
