const exp = require("express");
const app = exp();

const countriesRouter = require("./routers/countries");
const examplesRouter = require("./routers/examples");
const portfolioRouter = require("./routers/portfolio");

app.use(exp.static("assets"));
app.set("view engine", "ejs");

app.use("/", portfolioRouter);
app.use("/examples", examplesRouter);
app.use("/countries", countriesRouter);

app.listen(3000, function() {
	console.log("Listening!");
});
