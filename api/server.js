// server.js

// Set up packages.
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var cors = require('cors')

var port = process.env.PORT || 8123;  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

var mongoose   = require('mongoose');
mongoose.connect('mongodb://node:123@jello.modulusmongo.net:27017/aguR2avo'); // connect to our database

// Import mongoose chemas
var Puppy       = require('./models/puppy');

// Routes

var router = express.Router();              

// Return All, Create
router.route('/puppies')
	// Create 
	.post(function(req, res){
		console.log('posting')

		var puppy = new Puppy();      
        puppy.name = req.body.name;
        puppy.owner = req.body.owner;
        puppy.room = req.body.room;
        puppy.breed = req.body.breed;
        puppy.picture = req.body.picture;

        puppy.save(function(err) {
        	console.log(err)
        	if (err)
                res.send(err);

            res.json({ message: 'Puppy created!!' });

        })
	})
	// Return All
	.get(function(req, res) {
        Puppy.find(function(err, puppy) {
            if (err)
                res.send(err);

            res.json(puppy);
        });
    });
    

router.route('/puppies/:id')

    .get(function(req, res) {
        Puppy.findById(req.params.id, function(err, puppy) {
            if (err)
                res.send(err);
            res.json(puppy);
        });
    })

    .put(function(req, res) {

        Puppy.findById(req.params.id, function(err, puppy) {

            if (err)
                res.send(err);

            puppy.name = req.body.name;
	        puppy.owner = req.body.owner;
	        puppy.room = req.body.room;
	        puppy.breed = req.body.breed;
	        puppy.picture = req.body.picture; 

            
            puppy.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Puppy updated!' });
            });

        });
    })
    // Delete
    .delete(function(req, res) {
        Puppy.remove({
            _id: req.params.id
        }, function(err, puppy) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

// Register Routes
app.use('/api', router);

// Start the server
app.listen(port);
console.log('Server opening on ' + port);