import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

import authSspRouter from "./router/auth.router"
import cors from "cors"

const app = express();
// const server = createServer(app);


// const io = new Server(server, {
//   cors: {
//     origin: process.env.URL || "http://localhost:3000 ", // Cambia esto según la URL de tu frontend
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket) => {
//   console.log("Userconnected");
//   socket.on("loginRequest", (data) => {
//     setTimeout(() => {
//       socket.emit("loginResponse", {
//         status: "success",
//         data: {
//           zelid: data.zelid,
//           signature: data.signature,
//           loginPhrase: data.loginPhrase
//         }
//       });
//     }, 5000); // Simula una espera de 5 segundos para recibir la firma
//   });

//   socket.on("disconnect", () => {
//     console.log("Cliente desconectado:", socket.id);
//   });
// })


app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your Next.js app's URL
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use("/api", authSspRouter)

const PORT = process.env.URL ?? 8000;


app.listen(PORT, () => {
  console.log("Listening Port:", PORT);
})