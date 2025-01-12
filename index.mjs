import dotenv from 'dotenv'
import { app } from "./server.mjs";

dotenv.config()

const mySecret  = process.env.MY_SECRET
console.log(mySecret)

const port = 3000;

app.listen(port, () => {
  console.log(`Running in http://localhost:${port}`);
});

