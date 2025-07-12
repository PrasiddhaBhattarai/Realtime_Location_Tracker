import express from 'express';
import http from 'http';
import {Server} from 'socket.io';
 
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

const server = http.createServer(app);
const io = new Server(server);

io.on("connection",(socket) => {
    console.log("user connected ", socket.id);
    socket.on("sendLocation", (data) => {
        io.emit("receiveLocation", {id: socket.id, ...data});
    })

    socket.on("disconnect", () => {
        io.emit("userDisconnected", socket.id);
        console.log("user disconnected ", socket.id);
    })
});

app.get("/", (req, res) => {
    res.render("index");
})

server.listen(port, () =>{
    console.log(`Server running on port, ${port}`);
})