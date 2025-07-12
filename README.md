# Real-Time Tracker

This is a real-time tracking application built with Node.js, Express, Socket.IO, and Leaflet. It allows users to share their location in real-time and view the locations of other connected users on a map.

## Features

-   Real-time location sharing using Socket.IO.
-   Display of user locations on a map using Leaflet.
-   Automatic tracking of user disconnections.

## Technologies Used

-   Node.js
-   Express
-   Socket.IO
-   Leaflet
-   EJS (Embedded JavaScript templates)

## LINK FOR THE WEBSITE
```
https://realtime-location-tracker-h4li.onrender.com/
```

## Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2.  Navigate to the project directory:

    ```bash
    cd realtime_tracker
    ```

3.  Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1.  Start the server:

    ```bash
    npm run dev
    ```

    or

    ```bash
    npm start
    ```

2.  Open your browser and go to `http://localhost:3000`.

## Project Structure

-   `server.js`: Main server file using Express and Socket.IO.
-   `public/`: Contains static assets like CSS and JavaScript.
    -   `public/css/style.css`: CSS file for styling the application.
    -   `public/js/script.js`: JavaScript file for handling client-side logic, including location tracking and map updates.
-   `views/index.ejs`: EJS template for the main page.

## Configuration

-   The server runs on port 3000 by default. You can change this in the `server.js` file.

## Author

[Prashidha Bhattarai](https://github.com/your-github-username)

## License

ISC
