import mongoose from "mongoose";

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  author: { type: String },
  author_details: {
    name: String,
    username: String,
    avatar_path: String,
    rating: Number,
  },
  content: String,
  created_at: { type: Date, default: Date.now },
  id: String,
  updated_at: { type: Date, default: Date.now },
  url: String,
});

export default mongoose.model("Review", reviewSchema);
