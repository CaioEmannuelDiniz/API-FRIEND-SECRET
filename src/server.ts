import exp from "constants";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import https from "https";
import http from "http";
import fs from "fs";

import siteRoutes from "./routes/site";
import adminRoutes from "./routes/admin";
import { requestIntercepter } from "./utils/requestIntercepter";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//middleawrs interceptador
app.all("*", requestIntercepter);

app.use("/admin", adminRoutes);
app.use("/", siteRoutes);

const runServer = (port: number, server: http.Server) => {
  server.listen(port, () => {
    console.log(`🚀Running at PORT ${port}`);
  });
};

const regularServer = http.createServer(app);
if (process.env.NODE_ENV === "production") {
  //configurar SSL
  const options = {
    key: fs.readFileSync(process.env.SSL_KEY as string),
    cert: fs.readFileSync(process.env.SSL_CERT as string),
  };

  //rodar server na 80 e na 443
  const secServer = https.createServer(options, app);

  //server de desenvolvimento
  runServer(80, regularServer);

  //server que roda o servidor seguro
  runServer(443, secServer);
} else {
  const serverPort: number = process.env.PORT
    ? parseInt(process.env.PORT)
    : 9000;
  runServer(serverPort, regularServer);
}
