const WebHooks = require("node-webhooks");
const port = process.env.PORT || 3000

const hooks = new WebHooks({
  db: {
    'callback_hook': [`http://localhost:${port}/cb`]
  }
})

module.exports = hooks