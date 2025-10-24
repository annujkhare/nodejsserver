This project demonstrates a simple Node.js web server built using the http module.
It listens on port 3000 and handles multiple routes:

/home → Displays the Home page

/about → Displays the About page

/contact → Displays the Contact page

Any other route → Shows a custom 404 error page

Key Functionality:

The server uses the http.createServer() method to listen for incoming requests.

It reads and serves corresponding HTML pages using fs.readFile() (asynchronous file reading).

CSS styling is served separately from the /public folder.

Each valid route responds with a 200 (OK) status code, while invalid routes return 404 (Not Found).

The console logs every request to help in debugging.

This ensures efficient route handling, error management, and modular file structure.

<img width="1920" height="1020" alt="Screenshot 2025-10-24 211812" src="https://github.com/user-attachments/assets/6c5d2bff-cc74-419a-a089-e26ccb5a65e7" />
<img width="1920" height="1020" alt="Screenshot 2025-10-24 211638" src="https://github.com/user-attachments/assets/7058dd2c-e7d0-4f6f-a8d2-7cae197f0cb8" />
<img width="1920" height="1020" alt="Screenshot 2025-10-24 211645" src="https://github.com/user-attachments/assets/903f259f-5213-433f-8fc0-69eee5e02b4f" />
