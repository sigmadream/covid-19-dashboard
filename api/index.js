const express = require('express')
const bodyParser = require('body-parser')

const { sequelize } = require('./database')

const globalStateController = require('./controller/global-stat.controller')
const keyValueController = require('./controller/key-value.controller');

async function launchServer() {
    const app = express()
    app.use(bodyParser.json())

    app.get('/', (req, res) => {
        res.json({ message: 'Hello World!' })
    })
    app.get('/global-stats', globalStateController.getAll)
    app.post('/global-stats', globalStateController.insertOrUpdate)
    app.delete('/global-stats', globalStateController.remove)

    app.get('/key-value/:key', keyValueController.get);
    app.post('/key-value', keyValueController.insertOrUpdate);
    app.delete('/key-value/:key', keyValueController.remove);


    try {
        await sequelize.sync()
        console.log('Database connection successful')
    } catch (error) {
        console.error(error)
        process.exit(1)
    }

    const PORT = process.env.PORT || 8080
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`)
    })
}

launchServer()
