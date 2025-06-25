import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/text-imagify`
    );
    console.log(
      `MongoDB Connected SUCCESSFULLY..!! DB_HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`MONGO_DB Connection FAILED: ${error.message}`);
    process.exit(1);
  }
};

export default dbConnection;
