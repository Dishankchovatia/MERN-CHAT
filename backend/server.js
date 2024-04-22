const express = require("express");
const  chats  = require("./data/data.js");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const colors = require("colors");


dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send("api running");
});


app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(5000, console.log(`server started on PORT ${PORT}`));
