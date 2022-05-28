import {MongoClient} from 'mongodb'

const MONGODB_URI = process.env.MONGODB_URI
const MONGODB_DB_10 = process.env.DB_NAME_10
const MONGODB_DB_9 = process.env.DB_NAME_9
const MONGODB_DB_8 = process.env.DB_NAME_8
const MONGODB_DB_BOOKS = process.env.DB_NAME_BOOKS


if(!MONGODB_URI){
    throw new Error("MONGODB_URI not defined")
}

if(!MONGODB_DB_10){
    throw new Error("MONGODB_DB not defined")
}

let cachedClient = null
let cachedDb = null

export async function connectTODatabase() {
    if(cachedClient && cachedDb){
        return {
            client: cachedClient,
            db: cachedDb,
        }
    }

    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    let client = new MongoClient(MONGODB_URI, opts);
    await client.connect();
    // let db = client.db(MONGODB_DB_BOOKS);

    cachedClient = client;
    // cachedDb = db;

    return {
        client: cachedClient,
        // db: cachedDb,
    }
}