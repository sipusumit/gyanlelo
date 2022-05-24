const mongoose = require("mongoose")

async function conn(url){
    await mongoose.connect(url)
}

conn('mongodb+srv://sumit:sipu@gyanlelo.omjm4.mongodb.net/books?retryWrites=true&w=majority').catch(err => console.log(err))

const booksSchema = mongoose.Schema({
    name: String
})

const booksModel = mongoose.model('class10',booksSchema)


booksModel.find({}).then(console.log)