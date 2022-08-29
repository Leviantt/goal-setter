require("dotenv").config();
const path = require("path");
const express = require("express");
const goalRouter = require("./routes/goalRouter");
const userRouter = require("./routes/userRouter");
const { errorHandler } = require("./middlewares/errorMiddleware");
const { connectDB } = require("./config/db.js");
const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRouter);
app.use("/api/users", userRouter);

if (process.env.MODE === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    );
  });
}

app.use(errorHandler);

app.listen(port, () =>
  console.log(`Serves has been started on port ${port}...`)
);
