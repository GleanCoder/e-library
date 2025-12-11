import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler.ts";
import createHttpError from "http-errors";

const app = express();

app.get("/", (req, res) => {
  // const error = createHttpError(404, "something went wrong");
  // throw error;
  res.json({ Message: "Welcome to e-library apis " });
});

//global error handler
app.use(globalErrorHandler);

export default app;
