/**
 * @openapi
 * components:
 *  schemas:
 *      Game:
 *          type: object
 *          required:
 *              - title
 *              - image
 *              - company
 *              - platform
 *          properties:
 *              id:
 *                  type: string
 *                  description: Auto generated.
 *              title:
 *                  type: string
 *                  description: Title of the game.
 *              image:
 *                  type: string
 *                  description: Comercial image of the game.
 *              company:
 *                  type: string
 *                  description: The company who develops.
 *              platform:
 *                  type: list
 *                  description: The console where is release.
 *          example:
 *              id: sj25SajCm2
 *              title: Mario Bros
 *              image: https://i.ytimg.com/vi/VB6KbX_Bt7M/hqdefault.jpg
 *              company: Nintendo
 *              platform: ["Nintendo", "Super Nintendo", "Nintendo DS"]
 *  parameters:
 *      idParam:
 *          in: path
 *          name: id
 *          required: true
 *          description: Game's ID.
 *          schema:
 *              type: string
 *  responses:
 *      404NotFound:
 *          description: Game not found.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      example:
 *                          code: 404
 *                          message: Game not found.
 */

 /**
  * @openapi
  * tags:
  *     name: Games
  *     description: The games API
  */
