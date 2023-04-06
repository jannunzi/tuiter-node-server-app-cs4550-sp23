import mongoose from "mongoose";

const albumSchema = new mongoose.Schema(
  {
    name: String,
    napsterId: String,
  },
  { collection: "albums" }
);

export default albumSchema;
