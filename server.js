const express = require('express');
const app = express();
const port = 8080;

// Set views
app.set('views', './views');
app.set('view engine', 'ejs');

// Use static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/images'));

// Initial routing
app.get('/', (req, res) => {
  try {
    res.sendFile(__dirname + '/views/index.html');
    console.log("Received the file");
} catch (error) {
  console.error(error);
}
});

// Listening to port 8080
app.listen(process.env.PORT || 5000, function() {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});