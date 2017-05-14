const exp = require("express");
const app = exp();

app.use(exp.static("assets"));
app.set("view engine", "ejs");

// Load an example of Pug (Jade)
app.get("/pug", function(req, res) {
	res.render("pug-example.pug", {
		isPug: true,
		list: ["list", "of", "things"],
	});
});

// Load an example of EJS
app.get("/ejs", function(req, res) {
	res.render("ejs-example.ejs", {
		isEjs: true,
		list: ["list", "of", "things"],
	});
});

// Using the template, render some pages
function renderTemplate(res, page, title, pageArgs) {
	return res.render("template", {
		page: page,
		title: title,
		pageArgs: pageArgs,
	});
}

app.get("/", function(req, res) {
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

app.get("/about", function(req, res) {
	renderTemplate(res, "about", "About", {
		picture: "/images/will.jpeg",
		twitter: "wbobeirne",
		github: "wbobeirne",
	});
});

app.listen(3000, function() {
	console.log("Listening!");
});
