const express 		= require ('express');
const logger      	= require('morgan');
const artistRouter 	= require('./routes/artistRouter');
const genreRouter = require('./routes/genreRouter');
const bodyParser  	= require('body-parser'); 

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/artists', artistRouter);
app.use('/genres', genreRouter);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => console.log(`Server up and listening on port ${PORT} in ${app.get('env')} mode`));