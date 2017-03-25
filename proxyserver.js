// const app = require('express')();
//
// const proxy = require('express-http-proxy');
//
// // require('dotenv').config();
//
// // app.use('/test', proxy("http://192.168.99.100");
// app.use('/', (req, res) => { res.send('herro'); });
// app.use('/api', proxy('lhttp://192.168.99.100:3000/'));//process.env.ROUTE_API
// app.use('/vision', proxy('http://192.168.99.100:8100/'));//process.env.ROUTE_VISION ||
// app.use('/cloudinary', proxy('http://192.168.99.100:5000/'));//process.env.ROUTE_CLOUDINARY ||
// app.listen(process.env.PORT || 7000
//   console.log('connected on '+ process.env.PORT)
// );
//
const app = require('express')();

const proxy = require('express-http-proxy');

//
// app.use('/test', proxy("http://192.168.99.100");
// app.use('/', (req, res) => { res.send('herro'); });
app.use('/api', proxy('http://192.168.99.100:3000/'));
app.use('/submit/trail',proxy('http://192.168.99.100:5000/'));
app.use('/vision', proxy('http://192.168.99.100:8100/'));
app.use('/cloudinary', proxy('http://192.168.99.100:5000/'));
app.listen(process.env.PORT || 7000);
