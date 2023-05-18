import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema({
    location: { type: String, required: true }
});

export const MediaModel = mongoose.model("Media", mediaSchema);