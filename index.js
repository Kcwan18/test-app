const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const path = require("path");

app.get("/", function (req, res) {
	console.log("why cannot do it!!!!!")
	res.sendFile(path.join(__dirname, "/index.html"));
});

const main = () => {
	app.listen(PORT, function () {
		console.log("successfully!!!!!!!!!!!!!!!!!!")
		console.log(`Hello World! Kcwan express server on port ${PORT}!`);
	});
};

app.post("/", function (req, res) {
	// console.log(JSON.parse(req.body))
	// console.log("Try to parse it to Json:")
	const content = JSON.parse(req.body).msg;
	console.log("Content:");
	console.log(content);

	res.status(200).send("ok!");
});

main();
