const express = require("express");
const router = express.Router();
const GameController = require("../controllers/GameController");

/**
 * @openapi
 * /:
 *  get:
 *      tags: [Games]
 *      summary: Return the list of all games
 *      responses:
 *          200:
 *              description: the list of the games
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Game'
 */
router.get("", GameController.list);

/**
 * @openapi
 * /:
 *  post:
 *      tags: [Games]
 *      summary: Creates a new game.
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Game'
 *      responses:
 *          201:
 *              description: Game created successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Game'
 */

router.post("", GameController.create);

/**
 * @openapi
 * /{id}:
 *  get:
 *      tags: [Games]
 *      summary: Get the game by ID.
 *      parameters:
 *          - $ref: '#/components/parameters/idParam'
 *      responses:
 *          200:
 *              description: The game info by ID.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Game'
 *          404:
 *              $ref: '#/components/responses/404NotFound'
 */
router.get("/:id", GameController.getGame);

/**
 * @openapi
 * /{id}:
 *  patch:
 *      tags: [Games]
 *      summary: Update the game information by id.
 *      parameters:
 *          - $ref: '#/components/parameters/idParam'
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Game'
 *      responses:
 *          200:
 *              description: The game was updated successfully.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Game'
 *          404:
 *              $ref: '#/components/responses/404NotFound'
 *          500:
 *              description: Server side error.
 */
router.patch("/:id", GameController.update);

/**
 * @openapi
 * /{id}:
 *  delete:
 *      tags: [Games]
 *      summary: Delete the game by id.
 *      parameters:
 *          - $ref: '#/components/parameters/idParam'
 *      responses:
 *          200:
 *              description: The game was deleted successfully.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Game'
 *          404:
 *              $ref: '#/components/responses/404NotFound'
 *          500:
 *              description: Server side error.
 */
router.delete("/:id", GameController.destroy);

module.exports = router;