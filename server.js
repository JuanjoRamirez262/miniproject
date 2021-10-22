const express = require('express')
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: '9Wsujpfw-',
      database: 'movie_db'
    },
    console.log(`Connected to the movie_db database.`)
  );


app.get('/api/movies', (req,res) => {
    // Add logic
    db.query('SELECT * FROM movies', (err,response) => res.json(response))
})

app.post('/api/add-movies', (req,res) => {
    // add logic to add a movie
    const { name } = req.body

    if(name) {
        db.query(`INSERT INTO movies(movie_name) VALUES (?)`, name, (err, response) => {res.send("success")})
    } else {
        res.status(500).send("Failed adding movie")
    }
    
})

app.put('/api/update-review', (req,res) => {
    // add logic to update a movie
})

app.delete('/api/movie/:id', (req,res) => {
    // add logic to delete a movie
})

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);