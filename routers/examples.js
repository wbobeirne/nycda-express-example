const exp = require("express");
const router = exp.Router();

// Load an example of Pug (Jade.) By providing the file extension,
// we can have it use the pug view engine instead of EJS.
router.get("/pug", function(req, res) {
	res.render("pug-example.pug", {
		isPug: true,
		list: ["list", "of", "things"],
	});
});

// Load an example of EJS. No need for the file extension, because
// we set the view engine to "ejs".
router.get("/ejs", function(req, res) {
	res.render("ejs-example.ejs", {
		isEjs: true,
		list: ["list", "of", "things"],
	});
});

module.exports = router;
