module.exports = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Games swagger API",
            version: "1.0.0",
            description: "Swagger nodejs example"
        },
        servers: [
            {
                url: "http://localhost:4000/api"
            }
        ],
    },
    apis: ["./src/routes/*.js"]
};