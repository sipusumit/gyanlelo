const { connectTODatabase } = require('../../../lib/mongodb')
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res){
    return getPosts(req, res)
}

async function getPosts(req, res){
    try{
        let {db} = await connectTODatabase();

        let result = await db.collection(req.query.book)
            .find({}).toArray()
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