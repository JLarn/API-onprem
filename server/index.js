const fastify = require('fastify')();

fastify.decorate('provider', require('./mongo.js'))
fastify.register(require('@fastify/cors'), {
    origin: "*"
})

fastify.get('/', (req, res) => {
    res.send('works')
    return res
})

fastify.get('/clocks', async (req, res) => {
    let clocks = await fastify.provider.getClocks()
    res.send(clocks)
    return
})

fastify.get('/clocks/ids', async (req, res) => {
    let clocks = await fastify.provider.getAllClockIds()
    res.send(clocks)
    return
})

fastify.get('/clocks/:uuid', async (req, res) => {
    let id = req.params.uuid
    console.log(id)
    let clock = await fastify.provider.getClockByUuid(id)
    console.log(clock)
    res.send(clock)
    return
})

fastify.get('/batches/all', async (req, res) => {
    let batches = await fastify.provider.getAllBatches()
    console.log(batches)
    res.send(batches)
    return
})

fastify.get('/batches/:n_batch', async (req, res) => {
    let n_batch = req.params.n_batch
    let clocks = await fastify.provider.getClocksByBatch(n_batch)
    res.send(clocks)
    return
})


async function run() {
    try {
        let port = process.env.PORT
        await fastify.listen({ port, host: '0.0.0.0' }, () => {
            console.log(fastify.printRoutes())
        })
        console.log(`Server running on port ${port}`)
    } catch (error) {
        console.log('error', error)
    }
}

run()