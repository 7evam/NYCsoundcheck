const express 		= require ('express');
const logger      	= require('morgan');
const artistRouter 	= require('./routes/artistRouter');
const genreRouter   = require('./routes/genreRouter');
const bodyParser  	= require('body-parser'); 
const fetch 		= require('node-fetch');
const reactViews    = require('express-react-views');

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/artists', artistRouter);
app.use('/api/genres', genreRouter);

//fetch api
app.get('/',(req,res)=> {

const api = fetch('http://localhost:3000/api/artists')
	api
	.then(res => res.json())
	.then(data => {
		console.log('this is data', data)
		res.render('index', {
			artists: api
		});
	})
	.catch(err => console.log(err));
})

app.listen(PORT, () => console.log(`Server up and listening on port ${PORT} in ${app.get('env')} mode`));