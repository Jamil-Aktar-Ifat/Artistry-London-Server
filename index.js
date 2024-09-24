const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5005;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.uphhg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    const craftsCollection = client.db("craftsdb").collection("craft");

    
    // Get specific craft by ID
    app.get("/crafts/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await craftsCollection.findOne(query);
      if (result) {
        res.send(result);
      } else {
        res.status(404).send({ error: "Craft not found" });
      }
    });

    // Add new craft
    app.post("/crafts", async (req, res) => {
      const newCraft = req.body;
      console.log(newCraft);
      const result = await craftsCollection.insertOne(newCraft);
      res.send(result);
    });

    // Update craft by ID
    app.put("/crafts/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedCraft = req.body;

      const craft = {
        $set: {
          item_name: updatedCraft.item_name,
          subcategory_name: updatedCraft.subcategory_name,
          short_description: updatedCraft.short_description,
          price: updatedCraft.price,
          rating: updatedCraft.rating,
          Customisation: updatedCraft.Customisation,
          processing_time: updatedCraft.processing_time,
          stock_status: updatedCraft.stock_status,
          user_email: updatedCraft.user_email,
          user_name: updatedCraft.user_name,
          imageURL: updatedCraft.imageURL,
        },
      };

      const result = await craftsCollection.updateOne(filter, craft, options);
      res.send(result);
    });

    // Delete craft by ID
    app.delete("/crafts/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await craftsCollection.deleteOne(query);
      res.send(result);
    });

    // Ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// Test route to check if the server is running
app.get("/", (req, res) => {
  res.send("Artistry London server is running!");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
