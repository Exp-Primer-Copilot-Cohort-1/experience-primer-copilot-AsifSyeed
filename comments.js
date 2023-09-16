// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
//Importing routes
const posts = require('./routes/posts');
const comments = require('./routes/comments');
const users = require('./routes/users');
// Initialize express
const app = express();
// Initialize body parser
app.use(bodyParser.json());
// Initialize cors
app.use(cors());
// Initialize morgan
app.use(morgan('combined'));
// Initialize routes
app.use('/posts', posts);
app.use('/comments', comments);
app.use('/users', users);
// Start the server
app.listen(process.env.PORT || 8081);