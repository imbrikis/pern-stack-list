const express = require('express')
const cors = require('cors')
const pool = require('./db')

const app = express()

// middleware
app.use(cors())
app.use(express.json())

// ROUTES

// create a todo
app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body
    const newTodo = await pool.query(
      'INSERT INTO todo (description) VALUES ($1) RETURNING *',
      [description]
    )
    res.json(newTodo.rows[0])
  } catch (err) {
    console.error(err.message)
  }
})

// get all todos
app.get('/todos', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM todo')
    res.json(rows)
  } catch (err) {
    console.error(err.message)
  }
})

// get a todo
app.get('/todos/:id', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [
      req.params.id,
    ])
    res.json(rows[0])
  } catch (err) {
    console.error(err.message)
  }
})

// update a todo

// delete a todo

app.listen(5000, () => {
  console.log(`server has started on port 5000`)
})
