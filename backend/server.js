const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

let Wish = require('./wish.model');


const wishlistRoutes = express.Router();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/wishlist', {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function() {
  console.log("MongoDB is connected");
})

wishlistRoutes.route('/').get(function(req,res) {

  Wish.find(function(err, wishlist){
    if (err){
      console.log(err);
    } else {
      console.log(wishlist);
      res.json(wishlist);
    }
  });
});

wishlistRoutes.route('/:id').get(function(req,res){
  let id = req.params.id;
  Wish.findById(id, function(err, wish){
    res.json(wish);
  });
});
//
// wishlistRoutes.route('/update/:id').postfunction(req,res){
//   Wish.findById(req.params.id, function(err, wish){
//     if(!wish) {
//       res.status(404).send("Data is no found");
//     } else {
//       wish.wish_toy = req.body.wish_toy;
//       wish.wish_from = req.body.wish_from;
//       wish.wish_priority = req.body.wish_priority;
//       wish.wish_fulfilled = req.body.wish_fulfilled;
//       wish.save().then(wish => {
//         res.json('Wish Completed');
//       })
//       .catch(err => {
//         res.status(400).send("Update not Possible")
//       });
//   };
// });

wishlistRoutes.route('/add').post(function(req,res) {
  console.log("HIT: ", req.body);
  let wish = new Wish(req.body);

  wish.save()
  .then( wish => {
    res.status(200).json({'wish': 'Wish Successfully Added'});
  }).catch(err => {
    res.status(400).json('Wish failed to add');
  });
});

app.use('/wishlist', wishlistRoutes);

app.get('/', function(req,res){
  res.send('HELLO');
});

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
