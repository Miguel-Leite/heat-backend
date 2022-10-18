import 'dotenv/config';
import http from 'http';
import express, { response } from "express";
import { router } from './routes';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
app.use(cors())

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
    cors: {
        origin: "*"
    }
});

io.on("connection", socket => {
    console.log(`Usuário conectado no socket ${socket.id}`)
})

app.use(express.json())

app.use(router)

app.get('/github', (request, response)=> {
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
});

app.get("/signin/callback", (request, response) => {
    const { code } = request.query;

    return response.json(code)
})

app.listen(4000, ()=> console.log(`\u{200D}\u{1F680} Server is running on PORT 4000`))