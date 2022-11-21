import express from 'express' 
import path from 'path'
import { fileURLToPath } from 'url'
import { Server as WebSocketServer } from 'socket.io'
import Sockets from '../sockets'
import http from 'http'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express();
const server = http.createServer(app);
const httpServer = server.listen(5000);
const io = new WebSocketServer(httpServer);

app.use(express.static(__dirname +'/public')) 

console.log(`server: ${httpServer}`)

Sockets(io);