import app from "./src/app.ts";
import { config } from "./src/config/config.ts";
import connectDB from "./src/config/db.ts";
async function startServer() {
  //connect database
  await connectDB();

  const port = config.port || 3000;

  app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
  });
}
startServer();
