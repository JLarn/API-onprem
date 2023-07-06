const { MongoClient } = require('mongodb');
require('dotenv').config()
const connstr = process.env.MONGO
let client = new MongoClient(connstr);


module.exports.getClocks = async function () {
    let clocks = await client.db('provisioning').collection("devices").find({}).toArray(function (err, result) {
        if (err) {
            return (err)
        } else {
            console.log(result);
        }
    })
    return clocks
}

module.exports.getAllClockIds = async function () {
    const options = {
        projection: { _id: 1 }
    };
    let clocks = await client.db('provisioning').collection("devices").find({}, options).toArray(function (err, result) {
        if (err) {
            return (err)
        } else {
            console.log(result);
        }
    })
    return clocks
}

module.exports.getAllBatches = async function () {
    const options = {
        projection: { n_batch: 1, _id: 0, data_batch: 1 }
    };
    let batches = await client.db('provisioning').collection("devices").find({}, options).toArray()
    let res = []
    for (const e of batches) {
        if (!res.map(b => b.n_batch).includes(e.n_batch)) {
            res.push(e)
        }
    }
    return res
}

module.exports.getClocksByBatch = async function (n_batch) {
    const options = {
        projection: { _id: 1 }
    };
    let clocks = await client.db('provisioning').collection("devices").find({ n_batch: parseInt(n_batch) }, options).toArray()
    console.log(clocks.length)
    return clocks
}

module.exports.getClockByUuid = async function (id) {
    const query = { _id: id };
    let clock = await client.db('provisioning').collection("devices").findOne(query)
    return clock
}

