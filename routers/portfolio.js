const exp = require("express");
const renderTemplate = require("../util/renderTemplate");
const router = exp.Router();

router.get("/", function(req, res) {
	renderTemplate(res, "home", "Homepage", {
		links: [{
			text: "Pug Example",
			href: "/pug",
		}, {
			text: "EJS Example",
			href: "/ejs",
		}, {
			text: "About",
			href: "/about",
		}],
	});
});

router.get("/about", function(req, res) {
	renderTemplate(res, "about", "About", {
		picture: "/images/will.jpeg",
		twitter: "wbobeirne",
		github: "wbobeirne",
	});
});

module.exports = router;
