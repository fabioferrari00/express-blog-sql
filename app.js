//importo express
const express = require('express');
//importo il middleware errorsHandler
const errorsHandler = require('./middlewares/errorsHandler.js')
//importo il middleware notFound
const notFound = require('./middlewares/notFound.js')
//importo il file router per i post
const postRouter = require('./routers/posts.js');

const app = express();
const port = 3000;

//dico ad express di utilizzare la cartella public
app.use(express.static('public'));
app.use(express.json());

app.use('/posts', postRouter);

app.get('/', (req, res) => {
  console.log('Server del mio blog');
})

//utilizzo l'errorsHandler
app.use(errorsHandler);
//utilizzo il notFound
app.use(notFound);

//dico al server di rimanere in ascolto
app.listen(port, () => {
  console.log(`Server in ascolto alla porta ${port}`);
})