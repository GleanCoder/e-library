import app from "./src/app.ts";

function startServer() {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
  });
}
startServer();
