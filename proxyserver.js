const app = require('express')();

const proxy = require('express-http-proxy');

require('dotenv').config();

// app.use('/test', proxy("http://192.168.99.100");
app.use('/', (req, res) => { res.send('herro'); });
app.use('/api', proxy('localhost:3000'));//process.env.ROUTE_API
app.use('/vision', proxy('localhost:8100/'));//process.env.ROUTE_VISION ||
app.use('/cloudinary', proxy('localhost:5000/'));//process.env.ROUTE_CLOUDINARY ||
app.listen(process.env.PORT || 7000
  console.log('connected on '+ process.env.PORT)
);
