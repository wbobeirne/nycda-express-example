const exp = require("express");
const renderTemplate = require("../util/renderTemplate");
const router = exp.Router();

router.get("/login", function(req, res) {
	renderTemplate(res, "login", "Login", { error: null });
});

router.post("/login", function(req, res) {
	if (req.body.username === "will123" && req.body.password === "password") {
		res.redirect("/");
	}
	else {
		renderTemplate(res, "login", "Login", {
			error: "Wrong username or password",
		});
	}

	renderTemplate(res, "login", "Login", {});
});

module.exports = router;
