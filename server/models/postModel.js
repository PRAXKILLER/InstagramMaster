import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: "User" },
    media: { type: mongoose.Types.ObjectId, ref: "Media" },
    likes: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    // comments: [{ type: mongoose.Types.ObjectId, ref: "Comments" }],
    isReel: Boolean,
    isDeleted: Boolean,
    description: String,
  },
  {
    timestamps: true,
  }
);

export const PostsModel = mongoose.model("Posts", PostSchema);