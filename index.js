import { App } from "./src/app.js";

const app = new App(process.argv.slice(2));
app.start();
