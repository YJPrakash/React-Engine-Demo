const express = require('express');
const app = express();
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.get('/contact', (req, res) => {
  res.render('contact', { name: 'siva'});
});
app.get('/about', (req, res) => {
  res.render('about', { name: 'Flavio' });
});
app.listen(3000, '0.0.0.0', () => console.log('Server ready'));
