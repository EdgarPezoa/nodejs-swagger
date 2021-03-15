require("./swaggerSchema");
const game = require("./game");
const baseApiUrl = process.env.BASE_API_URL ? process.env.BASE_API_URL : "/api";

const useRoutes = (app) => {
    app.use(`${baseApiUrl}`, game);
}

module.exports = useRoutes;