// ../src/index.ts

import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.use(express.json());	// request body를 express에서 json으로 받아 온다.

app.use('/api', require('./api'));	// /api 엔드포인트에 요청이 들어오면 api 폴더로 분기한다.

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hi! This is my first express server. My name is Wonsik.');
});

app.listen('8000', () => {
    console.log(`
    #############################################x
        🛡️ Server listening on port: 8000 🛡️
    #############################################    
    `)
})