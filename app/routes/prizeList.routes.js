const authJwt = require("../middlewares/authJwt");
const controller = require("../controllers/prizeList.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  const baseUrl = "/api/prizeList";

  app.get(baseUrl, [authJwt.verifyToken],controller.allAccess);

  app.get(baseUrl+"/getList", [authJwt.verifyToken],controller.allAccess);

  app.post(baseUrl+"/createList", [authJwt.verifyToken], controller.createList);

  app.post(baseUrl+"/updateList",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.post(baseUrl+"/removeList",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};