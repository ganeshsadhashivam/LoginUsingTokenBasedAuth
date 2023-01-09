require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

//security packages
const cors = require("cors");

//connectDB
const connectDB = require("./db/connect");

const authenticateUser = require("./middleware/authentication");
//routers

const authRouter = require("./routes/auth");
const jobsRouter = require("./routes/jobs");

//error handlers
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware

//const mainRouter = require("./routes/main");
//app.use(express.static("./public"));
app.use(express.json());
app.use(cors());

// app.use("/api/v1", mainRouter);

//routes

// app.use(notFoundMiddleware);
// app.use(errorHandlerMiddleware);

//routes

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
