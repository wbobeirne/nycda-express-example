// Using the template, render some pages
function renderTemplate(res, page, title, pageArgs) {
	return res.render("template", {
		page: page,
		title: title,
		pageArgs: pageArgs,
	});
}

module.exports = renderTemplate;
