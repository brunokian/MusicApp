import mongoose from "mongoose";

const MONGO_DB_URL = 'mongodb://root:123456@localhost:27017';

const connectToDatabase = (
    mongoDatabaseURI = MONGO_DB_URL
  ) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;
