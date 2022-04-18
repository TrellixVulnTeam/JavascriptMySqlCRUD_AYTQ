const {MongoClient} = require('mongodb')
const uri =
  "mongodb://admin:FKRv1ILQOoBGwSoY@cluster0-shard-00-00.0q7qb.mongodb.net:27017,cluster0-shard-00-01.0q7qb.mongodb.net:27017,cluster0-shard-00-02.0q7qb.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-73m3dy-shard-0&authSource=admin&retryWrites=true&w=majority";
  const dbName = 'binar'

  const client = new MongoClient(uri,{
      useNewUrlParser : true,
      useUnifiedTopology : true,
  })

  client.connect((error , client) =>{
      if(error){
          return console.log('Gagal')
      } 
      const db = client.db(dbName)

db.collection('cars').insertOne({
    name : 'avanza',
    price : 200000
},
(error, result) => {
    if(error){
        return console.log(`Gagal menambahkan data`)
    }
    console.log(result)
    
})
  })

