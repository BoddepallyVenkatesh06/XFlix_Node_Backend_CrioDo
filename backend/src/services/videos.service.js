const videosData = require("../DB/videos.json");
const VideoSchema = require("../models/video.model");
const { VideoOperations } = require("./videoHandller");
const VideoOperationInstance = new VideoOperations();

const getAllVideos = async () => {
  return await VideoSchema.find({});
};

const getVideos = async (filter) => {
  let { title, genres, contentRating, sortBy } = filter;
  let videosData = await getAllVideos();

  if (title && genres && contentRating) {
    let result =
      await VideoOperationInstance.getVideosByTitle_genre_contentRating(filter);
    return result;
  } else if (title || genres || contentRating || sortBy) {
    let result =
      await VideoOperationInstance.getVideoByTitleOrGenreOrRatingOrSortBy(
        filter
      );
    return result;
  }
  return videosData.sort(
    (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
  );
};

const videoById = async (videoId) => {
  let result = await VideoSchema.findById(videoId);
  return result;
};

const createVideo = async (videoBody) => {
  let newVideo = new VideoSchema(videoBody);
  let saved =  await saveVideo(newVideo)
  return saved
};

const saveVideo = async (video) => {
  let savedVideo = await video.save();
  return savedVideo;
};

const changeVotes = async (videoId, newVoteBody) => {
  const video = await VideoSchema.findById(videoId);
  if (!video) {
    return video;
  }

  const { vote, change } = newVoteBody;

  if (vote === "upVote") {
    video.votes.upVotes += change === "increase" ? 1 : -1;
  } else if (vote === "downVote") {
    video.votes.downVotes += change === "increase" ? 1 : -1;
  }

  return saveVideo(video);
};

const changeViews = async (videoId) => {
  let video = await VideoSchema.findById(videoId);
  if (!video) {
    return video;
  }

  video.viewCount += 1;
  let savedVideo = await saveVideo(video);
  return savedVideo;
};

module.exports = {
  getVideos,
  videoById,
  createVideo,
  changeVotes,
  changeViews,
};
