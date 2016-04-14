var express = require('express');
var Message = require('./models/message');
// Get the router
var router = express.Router();

// Middleware for all this routers requests
router.use(function timeLog(req, res, next) {
  console.log('Request Received: ', dateDisplayed(Date.now()));
  next();
});

// Welcome message for a GET at http://localhost:8080/restapi
router.get('/', function(req, res) {
    res.json({ message: 'Welcome to the Mensa API' });
});

module.exports = router;

function dateDisplayed(timestamp) {
    var date = new Date(timestamp);
    return (date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
}

// GET all messages (using a GET at http://localhost:8080/messages)
router.route('/messages')
  .get(function(req, res) {
      Message.find(function(err, messages) {
          if (err)
              res.send(err);
          res.json(messages);
      });
  });

// Create a message (using POST at http://localhost:8080/messages)
router.route('/messages')
  .post(function(req, res) {
    var message = new Message();
    // Set text and user values from the request
    message.text = req.body.text;
    message.user = req.body.user;

    // Save message and check for errors
    message.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Message created successfully!' });
    });
  });

// GET message with id (using a GET at http://localhost:8080/messages/:message_id)
// Update message with id (using a PUT at http://localhost:8080/messages/:message_id)
// Delete message with id (using a DELETE at http://localhost:8080/messages/:message_id)
router.route('/messages/:message_id')
  .get(function(req, res) {
      Message.findById(req.params.message_id, function(err, message) {
          if (err)
              res.send(err);
          res.json(message);
      });
  })

  .put(function(req, res) {
      Message.findById(req.params.message_id, function(err, message) {
          if (err)
              res.send(err);
          // Update the message text
    message.text = req.body.text;
          message.save(function(err) {
              if (err)
                  res.send(err);
              res.json({ message: 'Message successfully updated!' });
          });

      });
  })

  .delete(function(req, res) {
      Message.remove({
          _id: req.params.message_id
      }, function(err, message) {
          if (err)
              res.send(err);

          res.json({ message: 'Successfully deleted message!' });
      });
  });
