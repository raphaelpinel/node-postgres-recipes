const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cons = require('consolidate'),
      dust = require('dustjs-helpers'),
      pg = require('pg'),
      app = express();
      
//Assign Dust Engine To .dust Files
app.engine('dust', cons.dust);

// Set .dust as default extension
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// PG connect
const { Pool, Client } = require('pg')
const connectionString = "postgres://recipe:success@localhost/recipebookdb";
const pool = new Pool({
connectionString: connectionString,
})
const client = new Client({
    connectionString: connectionString,
  })

  
//Route
app.get('/', function(req, res){
    //res.render('index');   
    pool.connect();
    pool.query('SELECT * FROM recipes', (err, result) => {
    console.log(err, result);
    res.render('index', {recipes: result.rows});
    // pool.end();
    }) 
});
app.post('/add', function(req,res){
    client.connect();
    client.query('INSERT INTO recipes(name, ingredients, directions) VALUES($1, $2, $3)', [req.body.name, req.body.ingredients, req.body.directions], (err, result) => {
    console.log(err, result);
    res.redirect('/');
    // client.end();
    });
});
app.post('/edit', function (req, res) {
    client.connect();
    client.query('UPDATE recipes SET name = $1, ingredients = $2, directions = $3 WHERE id = $4', [req.body.name, req.body.ingredients, req.body.directions, req.body.id], (err, result) => {
        console.log(err, result);
        res.redirect('/');       
    });
});

app.delete('/delete/:id', function(req, res){
    client.connect();
    client.query('DELETE FROM recipes WHERE id = $1', [req.params.id]);
    res.send(200);
})
//Server
app.listen(3000, function (){ 
    console.log('Server started on Port 3000');
});

