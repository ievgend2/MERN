const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use('/api/auth', require("./routes/auth.routes"))

const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get("mongoUri"), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true

        })
        app.listen(5000, () => console.log(`App hass been started on port ${PORT}`))

    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()
