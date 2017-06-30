var express = require('express');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 8080) );

app.use('/static', express.static(path.join(__dirname,'node_modules')));
app.use('/static', express.static(path.join(__dirname,'assets')));
app.get('/', (req, res) =>{
  // res.send('Hello world!!')
  res.sendFile(__dirname+'/index.html');
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});

/**/
