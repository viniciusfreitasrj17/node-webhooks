const express = require('express')
const hooks = require('./hooks')
const port = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.get('/', (req, res) => {
  hooks.trigger('callback_hook', { message: 'success trigged' })
  return res.status(200).send('Webhook trigged')
})
app.post('/cb', (req, res) => {
  console.log('Inside callback hooks', req.body)
  return res.status(200).end()
})

app.listen(port, () => console.log(`Express has been started at ${port}`))
