const express = require("express");
const app 	  = express(); //app is an object with a bunch of methods
// to build a server


app.get("/", (request, response) =>{  //baserout (like public folder)
	response.send("Hi, I'm the information the server has sent to the client")
});

app.get("/tacos", (req, res) => {
	res.json({
		"taco": 52,
		"type": "carne asada"
	})
})

app.get("/riker", (req, res) => {
	res.json({
		"name": "William T. Riker",
		"rank": "Commander",
		"age": 35
	})
	console.log(req)
})

app.get("/coconuts", (req, res) => {
	res.send("I've got a lov-e-ly bunch of coconuts. There they are a-standin in a row")
	console.log(req)
})

app.listen(3000, ()	=> {			//between 3000-9000 is where our server is living
	console.log("I am listening on port 3000")
})
