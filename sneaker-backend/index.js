const express = require('express');
const cors    = require('cors');
const Sneaks  = require('sneaks-api');
const sneaks  = new Sneaks();

const app  = express();
app.use(cors());

app.get('/search', (req, res) => {
  const { keywords = '', limit = 20 } = req.query;
  sneaks.getProducts(keywords, Number(limit), (err, list) =>
    err
      ? res.status(500).json({ error: err.message })
      : res.json(list)
  );
});

const PORT = process.env.PORT || 4000;      // ← use Render’s port in prod,
app.listen(PORT, () =>                       //   fallback to 4000 locally
  console.log('Sneaks proxy on', PORT)
);
