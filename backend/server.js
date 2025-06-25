import express from "express";
import cors from "cors";
import "dotenv/config";
import dbConnection from "./database/dbConfig.js";
import userRouter from "./routes/user.route.js";
import imageRouter from "./routes/image.route.js";

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);

app.use("/api/image", imageRouter);

app.get("/", (req, res) => res.send("API Working"));

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

dbConnection();
