import { app } from "./server.mjs";

const port = 3000;

app.listen(port, () => {
  console.log(`Running in http://localhost:${port}`);
});
