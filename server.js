const express 		= require ('express');
const logger      	= require('morgan');
const artistRouter 	= require('./routes/artistRouter');
const genreRouter   = require('./routes/genreRouter');
const bodyParser  	= require('body-parser'); 
const fetch 		= require('node-fetch');
const reactViews    = require('express-react-views');
const path           = require('path');

const PORT = process.env.PORT || 3100;

const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join('public')));


app.use('/artists', artistRouter);
app.use('/genres', genreRouter);

app.get('/', (req, res) => {
   res.render('home')
 });

app.get('/newArtist', (req, res) => {
   res.render('newArtist')
 });

//fetch api
// app.get('/',(req,res)=> {

// const api = fetch('http://localhost:3100/api/artists')
// 	api
// 	.then(res => res.json())
// 	.then(data => {
// 		console.log('this is data', data)
// 		res.render('index', {
// 			artists: data
// 		});
// 	})
// 	.catch(err => console.log(err));
// })


//console.log('this is artists[item]', artists[item]);

app.listen(PORT, () => console.log(`Server up and listening on port ${PORT} in ${app.get('env')} mode`));

