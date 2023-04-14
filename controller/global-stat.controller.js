const { GlobalStat } = require('../database')

async function getAll(req, res) {
    const globalStats = await GlobalStat.findAll()
    res.status(200).json({ globalStats })
}

async function insertOrUpdate(req, res) {
    const { cc, date } = req.body

    if (!cc || !date) {
        res.status(400).json({ error: 'Missing required fields' })
        return
    }

    const count = await GlobalStat.count({ where: { cc, date } })

    if (count === 0) {
        await GlobalStat.create(req.body)
    } else {
        await GlobalStat.update(req.body, { where: { cc, date } })
    }

    res.status(200).json({ message: 'success' })
}

async function remove(req, res) {
    const { cc, date } = req.body

    if (!cc || !date) {
        res.status(400).json({ error: 'Missing required fields' })
        return
    }

    await GlobalStat.destroy({ where: { cc, date } })

    res.status(200).json({ message: 'success' })
}

module.exports = {
    getAll,
    insertOrUpdate,
    remove,
}