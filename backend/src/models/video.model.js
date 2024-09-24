const mongoose = require("mongoose");
const videoSchema = mongoose.Schema(
  {
    videoLink: {
      type: String,
      required: true,
      trim: true,
      description: "Embed link for the video",
    },
    title: {
      type: String,
      required: true,
      trim: true,
      description: "Title of the video",
    },
    genre: {
      type: String,
      required: true,
      trim: true,
      description: "Video genre",
    },
    contentRating: {
      type: String,
      required: true,
      trim: true,
      description: "Video age rating",
    },
    releaseDate: {
      type: String,
      required: true,
      trim: true,
      description: "Video release date",
    },
    previewImage: {
      type: String,
      required: true,
      trim: true,
      description: "Thumbnail image link for the video",
    },
    votes: {
      upVotes: {
        type: Number,
        default: 0,
      },
      downVotes: {
        type: Number,
        default: 0,
      },
    },
    viewCount: {
      type: Number,
      default: 0,
      description: "Number of times the video was viewed",
    },
  },
  { timestamps: false }
);

const Video = mongoose.model("videos", videoSchema);
module.exports = Video;
