const exp = require("express");
const countries = require("../json/country-info.json");
const renderTemplate = require("../util/renderTemplate");
const router = exp.Router();


router.get("/", function(req, res) {
	renderTemplate(res, "country", "Country - USA", {
		country: countries.USA,
	});
});

module.exports = router;
