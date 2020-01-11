const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (res,req)=> {
	res.render('./test.html');
});

app.post('/', (req,res)=>{
	console.log(req.body.message);
	console.log(req.body.lang);
	console.log(req.body);
});

app.listen(8080, function () {
  console.log('Application écoute sur le port 8080!');
})
