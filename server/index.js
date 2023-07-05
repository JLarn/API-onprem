const fastify = require('fastify')();

fastify.decorate('provider', require('./mongo.js'))
fastify.register(require('@fastify/cors'), {
    origin: "http://192.168.101.0/24"
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