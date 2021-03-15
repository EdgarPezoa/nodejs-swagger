process.env.NODE_ENV !== "production" ? require("dotenv").config() : null;
const express = require("express");
const app = express();
const cors = require('cors')
const morgan = require("morgan");
const low = require("lowdb");
const swaggerUI = require("swagger-ui-express");
const swaggerJsdoc = require('swagger-jsdoc');
const useRoutes = require("./src/routes");
const options = require("./swagger");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");

const PORT = process.env.PORT ? process.env.PORT : 4000;
const db = low(adapter);
const swaggerSpec = swaggerJsdoc(options);
const games = {
    games: [
        {
            "id": "41FQIRdw54",
            "title": "Mario Bros",
            "image": "https://i.ytimg.com/vi/VB6KbX_Bt7M/hqdefault.jpg",
            "company": "Nintendo",
            "platform": [
            "Nintendo",
            "Super Nintendo",
            "Nintendo DS"
            ]
        },
        {
            "id": "gVsGt4XvlQ",
            "title": "Crash Bash",
            "image": "https://images-na.ssl-images-amazon.com/images/I/51ZCTR80K0L._AC_SX466_.jpg",
            "company": "Naugthy dog",
            "platform": [
            "PlayStation"
            ]
        },
        {
            "id": "zGEN-y_WEO",
            "title": "Halo combat evolved",
            "image": "https://static.wikia.nocookie.net/halo/images/2/2b/Portada_Halo_CE.jpeg/revision/latest/scale-to-width-down/340?cb=20150822195719&path-prefix=es",
            "company": "Microsoft",
            "platform": [
            "XBOX"
            ]
        }
]};
db.defaults(games).write();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
useRoutes(app);
app.db = db;

app.listen(PORT, () =>
    console.log(`Success, Listening at port ${PORT}`)
);