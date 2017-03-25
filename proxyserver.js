const app = require('express')();

const proxy = require('express-http-proxy');


app.use('/api', proxy('http://192.168.99.100:3000/'));
app.use('/submit/trail',proxy('http://192.168.99.100:5000/'));
app.use('/vision', proxy('http://192.168.99.100:8100/'));
app.use('/cloudinary', proxy('http://192.168.99.100:5000/'));
app.listen(process.env.PORT || 7000);
