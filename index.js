import express from 'express';
import Microphone from 'node-microphone';
import fetch from 'node-fetch';
import { dirname } from 'path'
import { fileURLToPath } from 'url';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

//define o __dirname e o cabeçalho de arquivos .js
app.use(express.static('src', { 
  setHeaders: function(res, path, stat) {
    if (path.endsWith('.js')) {
      res.set('Content-Type', 'application/javascript');
    }
  }
}))

//monta uma rota para servir a página html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
});

// inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
