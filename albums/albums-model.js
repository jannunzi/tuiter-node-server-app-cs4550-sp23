import mongoose from "mongoose";
import albumSchema from "./albums-schema.js";
const albumModel = mongoose.model("AlbumModel", albumSchema);
export default albumModel;
