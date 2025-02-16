import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully!");
    });
    connection.on("error", (err) => {
      console.log(
        "Connection error to MongoDB. Kindly ensure MongoDB is running" + err
      );
      process.exit();
    });
  } catch (err) {
    console.log("something went wrong motherfucka!");
    console.log(err);
  }
}
