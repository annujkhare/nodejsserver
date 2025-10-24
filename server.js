// Basic Node.js Web Server using HTTP Module
// Handles multiple routes and serves different HTML pages
// server.js
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

// Helper function to serve files asynchronously
const serveFile = (filePath, contentType, response, statusCode = 200) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.writeHead(500, { "Content-Type": "text/plain" });
      response.end("Internal Server Error");
    } else {
      response.writeHead(statusCode, { "Content-Type": contentType });
      response.end(data);
    }
  });
};

// Create the HTTP server
const server = http.createServer((req, res) => {
  console.log(`Request for ${req.url}`);

  // Route handling
  if (req.url === "/" || req.url === "/home") {
    serveFile(path.join(__dirname, "pages", "home.html"), "text/html", res);
  } else if (req.url === "/about") {
    serveFile(path.join(__dirname, "pages", "about.html"), "text/html", res);
  } else if (req.url === "/contact") {
    serveFile(path.join(__dirname, "pages", "contact.html"), "text/html", res);
  } else if (req.url === "/style.css") {
    // Serve CSS file
    serveFile(path.join(__dirname, "public", "style.css"), "text/css", res);
  } else {
    // 404 page
    serveFile(path.join(__dirname, "pages", "404.html"), "text/html", res, 404);
  }
});

// Start listening on port 3000
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
