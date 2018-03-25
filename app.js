var express = require('express');
var bodyparser = require('body-parser')
var path = require('path')
var app = express();

app.use(bodyparser())
app.use(express.static('web'))

app.post('/',function(req, res){
	var body = req.body
	console.log(body)
	res.send(depression_rules(body) + treatment_rules(body))

})

function depression_rules(body){
	let c1 = body["c1"], 
	c2 = body["c2"], 
	c3 = body["c3"],
	c4 = body["c4"],
	c5 = body["c5"],
	c6 = body["c6"]

	if(c1 && c3 && c4 && !c6){
		return "Mild Substance abuse"		
	}else if(c1 && c3 && c5 && !c6){
		return "Moderate to severe Substance abuse"
	}else if(c1 && c3 && c4 && c6){
		return "Co-morbidity with depression."			
	}else if(c1 && c3 && c5 && c6){
		return "Co-morbidity with depression"	
	}else{
		return ''
	}
	
}

function treatment_rules(body){
	let c1 = body.c1,
	c2 = body.c2, 
	c3 = body.c3,
	c14 = body.c14,
	c15 = body.c15,
	c16 = body.c16,
	c17 = body.c17,
	c18 = body.c18,
	c19 = body.c19,
	c20 = body.c20,
	c21 = body.c21,
	c22 = body.c22,
	c23 = body.c23
	
	if (!c1 && c2 && !c3 && c14 && c15 && c16){
		return "Psychological intervention"	
	}else if(!c1 && !c2 && c3 && c14 && c15 && c16 && c17){
		return "Buprenorphine/naloxone"	
	}else if(!c1 && !c2 && c3 && c14 && c15 && c16 && c17 && c18 && c19 && c20){
		return "methadone"
	}else if(!c1 && !c2 && c3 && c14 && c15 && c16 && !c17 && !c18 && !c19 && !c20 && c21 && c22){
		return "Oral morphine"
	}else if(!c1 && !c2 && c3 && c23){
		return "Oral morphine"
	}else{
		return ''	
	}


}

app.listen(3000, "0.0.0.0");

