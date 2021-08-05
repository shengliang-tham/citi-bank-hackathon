const express = require('express')
const { MongoClient, ObjectId } = require('mongodb');
const app = express()
const cors = require('cors')
const port = 3000

const uri = "mongodb+srv://user:oVJNxwi0HugFFlis@development.pxu7b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const testData = require('./example-json').array

app.use(cors())
app.use(express.json())


// 610aa6612e8324fce334c398 for user
app.listen(port, () => {

  console.log(`App listening at http://localhost:${port}`)

  client.connect((err, client) => {
    console.log('Connected to db')
    const db = client.db('development')

    app.get('/retrieve-merchants', async (req, res) => {
      res.json(await db.collection('users').find({ "type": "merchant" }).toArray())
    })

    app.get('/retrieve-user', async (req, res) => {
      res.json(await db.collection('users').findOne({ "type": "customer" }).toArray())
    })

    app.post('/redeem-voucher', async (req, res) => {
      console.log(req.body)
      await db.collection('users').updateOne({ brandName: "FILA", "vouchers.voucherCode": req.body.voucherCode }, { $inc: { "vouchers.$.totalRemaining": -1, } })
      await db.collection('users').updateOne({ "type": "customer" }, { $inc: { loyaltyPoints: req.body.loyaltyPoints } })
      res.json({
        success: true
      })
    })

    app.get('/reset', async (req, res) => {
      await db.collection('users').deleteMany()
      await db.collection('users').insertMany(testData)
      res.sendStatus(200)
    })
  });
})
//
