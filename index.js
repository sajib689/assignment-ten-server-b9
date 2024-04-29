const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())




const uri = `mongodb+srv://${process.env.Db_user}:${process.env.Db_pass}@cluster0.2m0rny5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
//    await client.connect();
   const spotCollection = await client.db('touristSpot').collection('spots')
    const countriesCollection = await client.db('touristSpot').collection('countries')
    const contactCollection = await client.db('touristSpot').collection('contact')
    
    app.get('/spots', async (req, res) => {
    const email = req.query.email;
    if (email) {
        // Fetch spots based on email
        const result = await spotCollection.find({ email: email }).toArray();
        res.send(result);
    } else {
        // Fetch all spots
        const result = await spotCollection.find().toArray();
        res.send(result);
    }
});

    // post spot 
    app.post('/spots', async (req, res) => {
        const query = req.body 
        const result = await spotCollection.insertOne(query)
        res.send(result)
    })
  
 
// get one spot details
app.get('/spots/:id', async (req, res) => {
    const id = req.params.id
    const filter = {_id: new ObjectId(id)}
    const result = await spotCollection.findOne(filter)
    res.send(result)
})
// delete form the mylist
app.delete('/spots/:id', async (req, res) => {
    const id = req.params.id 
    const filter = {_id: new ObjectId(id)}
    const result = await spotCollection.deleteOne(filter)
    res.send(result)
})
// update spot
app.put('/spots/:id', async (req, res) => {
    const id = req.params.id
    const filter = {_id: new ObjectId(id)}
    const options = { upsert: true}
    const spot = req.body
    const updateSpots = {
        $set: {
            tourist_spot_name:spot.tourist_spot_name,
            country_name:spot.country_name,
            location:spot.location,
            short_description:spot.short_description,
            average_cost:spot.average_cost,
            image:spot.image,
            seasonality:spot.seasonality,
            travel_time:spot.travel_time,
            total_visitors_per_year:spot.total_visitors_per_year,
        }
    }
    const result = await spotCollection.updateOne(filter, updateSpots, options)
    res.send(result)
})

    app.get('/countries', async (req, res) => {
        const country_name = req.params.country_name;
        if (country_name) {
            // Fetch spots based on email
            const result = await countriesCollection.find({ country_name: country_name }).toArray();
            res.send(result);
        } else {
            // Fetch all spots
            const result = await countriesCollection.find().toArray();
            res.send(result);
        }
    });
 
   
    // contact us
    app.post('/contact', async(req, res) => {
        const query = req.body 
        const result = await contactCollection.insertOne(query)
        res.send(result)
    })
    
    
//    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
   // await client.close();
  }
}
run().catch(console.dir);


app.get('/', async (req, res) => {
    res.send('Welcome the Sajib server')
})

app.listen(port, () => {
    console.log(`ami tor bap server ${port}`)
})