var express = require('express');
var user = require('../schemas/userSchema');
var mongoose = require('mongoose');
var ObjectID = require('mongodb').ObjectID; 
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {

       if(process.env.OPENSHIFT_NODEJS_IP == '127.8.223.129' ) {
           mongoose.connect('mongodb://admin:6Nx5jAkXlKkQ@127.8.223.130:27017/dev');

       }
       else {
           mongoose.connect('localhost','dev');            
       }
       
        var Find = user.find( {}, function(err, find){            
           //console.log(find);
            res.json(find);
            mongoose.connection.close();
        });
     
    
});

/*insert user */
router.get('/create/:firstname/:lastname/:email', function(req, res) {

       if(process.env.OPENSHIFT_NODEJS_IP == '127.8.223.129' ) {
           mongoose.connect('mongodb://admin:6Nx5jAkXlKkQ@127.8.223.130:27017/dev');

       }
       else {
           mongoose.connect('localhost','dev');            
       }
       
       
     var Post = new user({
        firstname: req.params.firstname,
        lastname: req.params.lastname,
        email: req.params.email
     });

     Post.save(function(err, post) {
        if (err) return console.error(err);
        console.dir(post);
        res.json(post);
        mongoose.connection.close();
     });
    
});

/*update user */
router.get('/update/:id/:firstname/:lastname/:email', function(req, res) {
    
       if(process.env.OPENSHIFT_NODEJS_IP == '127.8.223.129' ) {
           mongoose.connect('mongodb://admin:6Nx5jAkXlKkQ@127.8.223.130:27017/dev');

       }
       else {
           mongoose.connect('localhost','dev');            
       }
     
     
    user.findById(req.params.id, function(error,found){
            
        console.log(error);
        
        if(!found) {
            mongoose.connection.close();
            return res.status(404).json({
                message: 'User with id ' + req.params.id + ' can not be found.'
            });
        }
        
        var editUser = new user({
            firstname: req.params.firstname,
            lastname: req.params.lastname,
            email: req.params.email
        });
        
        
        
        var queryData = editUser.toObject();
        
        delete queryData._id;
        
     
        found.update(queryData, function(error, updatedUser) {
            mongoose.connection.close();    
            return res.json(updatedUser);
        
        });
        
                    
    });
     
    
});

/*delete user */
router.get('/delete/:id', function(req, res) {
    
       if(process.env.OPENSHIFT_NODEJS_IP == '127.8.223.129' ) {
           mongoose.connect('mongodb://admin:6Nx5jAkXlKkQ@127.8.223.130:27017/dev');

       }
       else {
           mongoose.connect('localhost','dev');            
       }
       
       
        user.findById(req.params.id, function(error,found){
                
            console.log(error);
            
            if(!found) {
                mongoose.connection.close();
                return res.status(404).json({
                    message: 'User with id ' + req.params.id + ' can not be found.'
                });
            }
            
            found.remove(function(){
                mongoose.connection.close();
                return res.json({'message' : 'user with id ' + found['_id'] + ' has been deleted'});
            });
        });
    
});

module.exports = router;
