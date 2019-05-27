const express = require('express')
const app = express()
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.get('/about', (req, res) => {
  res.render('about', { name: 'Flavio' })
})
app.listen(3000, () => console.log('Server ready'))
