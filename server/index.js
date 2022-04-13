import express from "express"
import AllRoutes from "./Routes/index.js";
// const AllRoutes = require('./Routes');


let port = process.env.PORT || 2410;
import cors from 'cors'
let app = express();
app.use(cors({origin: '*','Access-Control-Allow-Origin': '*'}));
app.use(express.urlencoded({
    extended:true
}))

app.use(express.json());

app.use('/',AllRoutes);
app.listen(port,()=> console.log(`server started on http://localhost:${port}`))