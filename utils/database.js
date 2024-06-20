import mongoose from "mongoose";

let isConnected = false; // track the connection status

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    // console.log("=> using existing database connection.");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "Share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // console.log("=> connected to database");
    isConnected = db.connections[0].readyState;
  } catch (err) {
    console.error(err);
  }
  return; // return the connection status to the caller function
};
