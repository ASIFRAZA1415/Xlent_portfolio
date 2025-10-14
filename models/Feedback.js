import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
  video: {
    type: String, // Cloudinary video URL store karega
    default: "",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Avoid model overwrite error during Next.js Hot Reload
export default mongoose.models.Feedback ||
  mongoose.model("Feedback", FeedbackSchema);

