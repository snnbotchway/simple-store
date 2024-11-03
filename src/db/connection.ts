import { MongoClient } from "mongodb"
import { MONGO_URI } from "../config"

const mongoClient = new MongoClient(MONGO_URI)
export const db = mongoClient.db("store")
