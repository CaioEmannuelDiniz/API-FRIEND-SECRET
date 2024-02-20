import exp from 'constants';
import dotenv from 'dotenv';
import express from "express";
import cors from 'cors';
import https from 'https';
import http from 'http';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const runServer = (port: number, server: http.Server)=>{
    server.listen(port, () =>{
        console.log(`🚀Running at PORT ${port}`)
    });
}

const regularServer = http.createServer(app);
if(process.env.NODE_ENV === 'production'){
    //TODO: configurar SSL
    //TODO: rodar server na 80 e na 443
}else{
    const serverPort: number = process.env.PORT ? parseInt(process.env.PORT) : 9000;
    runServer(serverPort,regularServer);
}