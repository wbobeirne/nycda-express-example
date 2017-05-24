const exp = require("express");
const bodyParser = require("body-parser");
const app = exp();

const countriesRouter = require("./routers/countries");
const templateExamplesRouter = require("./routers/examples");
const portfolioRouter = require("./routers/portfolio");
const formExamplesRouter = require("./routers/formExamples");

// Setup the public assets to live in the assets folder
app.use(exp.static("assets"));

// Set the default view engine to EJS, which means
// we don't have to specify ".ejs" in render paths
app.set("view engine", "ejs");

// Configure your app to correctly interpret POST
// request bodies. The urlencoded one handles HTML
// <form> POSTs. The json one handles jQuery POSTs.
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// Load all of the routers
app.use("/", portfolioRouter);
app.use("/examples", templateExamplesRouter);
app.use("/countries", countriesRouter);
app.use("/forms", formExamplesRouter);

app.listen(3000, function() {
	console.log("Listening!");
});
