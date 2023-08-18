const express = require('express')
const server = express();

const citationRouter = require('./Routers/citation.router');
//const { version } = require('os');
const versionRouter = require('./Routers/version.route');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/citaionTest', (request, response) => {
  response.send('je teste mes futures citations sur le bot')
})

app.use(citationRouter);
app.use(versionRouter);
app.listen(port, () => {
  console.log(`serveurBot Prêt et à l'ecoute sur le port ${port}`)
})
