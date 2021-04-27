const express = require('express');
const cors = require('cors');
const app = express();

const port = 3065;

app.use(cors());

app.get('/', (req, res) => {
  res.send('running express');
});

app.listen(port, () => {
  console.log('서버 실행!!!');
});
