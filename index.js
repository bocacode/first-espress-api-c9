import express from 'express'

const app = express()
app.use(express.json())

let instructors = ['Jiho', 'Todd']

app.post('/instructors', (req, res) => {
  // take an array of new instructors and merge with existing
  const newInstructors = req.body.instructors
  instructors = [...instructors, ...newInstructors]
  // save to database
  res.send(instructors)
})


// now we just need to list some valid requests
app.get('/test', (request, response) => {
  console.log('Test Request Made.')
  response.send('😀😀 Our API fricken works! 😀😀')
})

app.get('/instructors', (request, response) => {
  // get from database
  response.json(instructors)
})

app.get('/secure', (request, response) => {
  // no users are allowed here.
  response.status(401).send('Not authorized.')
})

app.post('/students', (req, res) => {
  // we need to handle the post request (body)
  const newStudent = req.body
  // save to database
  console.log(newStudent)
  res.send(newStudent)
})


app.listen(3030, () => {
  console.log('Listening on http://localhost:3030...')
})
