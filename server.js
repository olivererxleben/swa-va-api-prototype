var http 				= require('http');
var express 		= require('express');
var bodyParser	= require('body-parser');


// configure app
var app = express();

app.use(bodyParser());

var beacons_api = express.Router()
.get('/:major/:minor/?', function(req, res) {
	console.log(req.params);
	if( (req.params.major == 1337) && (req.params.minor == 42)) {
		res.status(200).send({msg: "check-in", type: "msg"});
	} else {
		res.status(404).send({msg: "not found.", type: "err"});
	}

})

app.use('/api/v1/beacons/', beacons_api);

app.listen(9090, function() {console.log('take off')});
