import app from "./src/app.ts";
import { config } from "./src/config/config.ts";

function startServer() {
  const port = config.port || 3000;
  app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
  });
}
startServer();
