import express from "express";
import cors from "cors";
import signupRouter from "./routes/signup";
import connection from "./db";

connection.connect((err) => {
  if (err) throw err;
  console.log("Database Connected");
});

const app = express();
app.use(express.json());
app.use(cors());

app.use(signupRouter);

export default app;
