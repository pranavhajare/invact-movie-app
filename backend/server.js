const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const movieRoutes = require("./routes/MovieRoutes");

dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

const allowedOrigins = ["https://invact-movie-app-beta.vercel.app"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.get("/", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.send("hello world");
});



app.get("/", (req, res) => {
  res.send("Server is running fine");
});

app.use("/api/movies", movieRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
