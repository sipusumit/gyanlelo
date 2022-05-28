const { connectTODatabase } = require('../../lib/mongodb')
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res){
    switch (req.method) {
        case "POST":
            getBooks(req,res)
            break;
    
        default:
            return res.json({
                message: "use POST method",
                sucess: false
            })
            break;
    }
}

async function getBooks(req, res){
    try{
        let {client} = await connectTODatabase();
        let db = client.db('books');
        let result = await db.collection(JSON.parse(req.body).db)
            .find().toArray()
        return res.json({
            message: JSON.parse(JSON.stringify(result)),
            success: true,
        })
    }catch (error){
        return res.json({
            message: new Error(error).message,
            success: false
        })
    }
}
