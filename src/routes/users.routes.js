const { Router } = require("express");

const UsersController = require("../controllers/UsersController"); // ../ saindo da pasta routes e acessar a pasta controllers e acessar o UsersController  

const usersRoutes = Router();


function myMiddleware(request, response, next){+

}

const usersController = new UsersController();

usersRoutes.post("/", usersController.create);

module.exports = usersRoutes;