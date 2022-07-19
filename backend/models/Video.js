import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema(
  {
    userId: {
      type: "string",
      required: true,
    },
    title: {
      type: "string",
      required: true,
    },
    desc: {
      type: "string",
      required: true,
    },
    imgUrl: {
      type: "string",
      required: true,
    },
    videoUrl: {
      type: "string",
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: [String],
      default: [],
    },
    dislikes: {
      type: [String],
      default: [],
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Video", VideoSchema);
