import mongoose from "mongoose";

const resourceSchema = mongoose.Schema({
  title: String,
  description: String,
  link: String,
});

const Resource = mongoose.model("Resource", resourceSchema);
export default Resource;
