const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const router = require('./Routes/roues');
const userRoutes = require('./Routes/UserRoutes')
const db = require('./Connect/db');



//app connection
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors({
    origin: "https://radiant-quokka-c36440.netlify.app",
    // origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true,
}))
app.use(cookieParser());


// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'https://main--radiant-quokka-c36440.netlify.app');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     next();
// });


//DB connect
db();



const Portal = process.env.Portal || 8000;

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use(router)
app.use(userRoutes)

app.listen(Portal, () => {
    console.log(`App is runing in a portal ${Portal}`);
})