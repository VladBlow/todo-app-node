const express = require('express');
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json());
const port = process.env.PORT || 3001;



app.get('/', (req, res) => res.send('Hello World!'));


app.get('/api/todos', (req, res) => {
  res.send(123123)
})



app.listen(port, () => console.log(`Todo app listening on port ${port}!`));

module.exports = app;
