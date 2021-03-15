const { nanoid } = require("nanoid");
const idLength = process.env.ID_LENGTH ? process.env.ID_LENGTH :10;

const list = (req, res) => {
    const games = req.app.db.get("games");
    if(!games){
        games = {};
    }
    return res.status(200).send({
        code: 200,
        massage: "Game list",
        data: games
    });
}

const getGame = (req, res) => {
    const games = req.app.db.get("games").find({ id: req.params.id }).value();
    if(!games){
        return res.status(404).send({
            code: 404,
            message: "Game not found."
        });
    }
    return res.status(200).send({
        code: 200,
        massage: "Game",
        data: games
    });
}

const create = (req, res) => {
    const game = {
        id: nanoid(idLength),
        ...req.body
    }
    try{
        req.app.db.get("games").push(game).write();
    }catch(error){
        return res.status(500);
    }
    return res.status(200).send({
        code: 201,
        massage: "Game created",
        data: game
    });
}

const update = (req, res) => {
    let game = {};
    try {
        req.app.db.get("games").find({ id: req.params.id }).assign(req.body).write();
    } catch (error) {
        return res.status(500);
    }
    game = req.app.db.get("games").find({ id: req.params.id })
    return res.status(200).send({
        code:200,
        massage: "Game updated",
        data: game
    });
}

const destroy = (req, res) => {
    const game = req.app.db.get("games").find({ id: req.params.id })
    req.app.db.get("games").remove({ id: req.params.id }).write();
    return res.status(200).send({
        code: 200,
        massage: "Game deleted",
        data: game
    });
}

module.exports = {
    list,
    getGame,
    create,
    update,
    destroy,
};