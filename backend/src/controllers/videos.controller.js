const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { VideoServices } = require("../services/index");

const getAllVideos = catchAsync(async (req, res) => {
  const { title, genres, contentRating, sortBy } = req.query;
  const result = await VideoServices.getVideos({ title, genres, contentRating, sortBy });
  res.status(httpStatus.OK).send({ videos: result });
});

const getVideoById = catchAsync(async (req, res) => {
  const { videoId } = req.params;
  const result = await VideoServices.videoById(videoId);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "No video found with matching id");
  }
  res.status(httpStatus.OK).send(result);
});

const createNewVideo = catchAsync(async (req, res) => {
  const videoData = req.body;
  const newVideo = await VideoServices.createVideo(videoData);
  res.status(httpStatus.CREATED).send(newVideo);
});

const updateVotes = catchAsync(async (req, res) => {
  const { videoId } = req.params;
  const voteData = req.body;
  const result = await VideoServices.changeVotes(videoId, voteData);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "No video found with matching id");
  }
  res.status(httpStatus.NO_CONTENT).send(result);
});

const updateViews = catchAsync(async (req, res) => {
  const { videoId } = req.params;
  const result = await VideoServices.changeViews(videoId);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "No video found with matching id");
  }
  res.status(httpStatus.NO_CONTENT).send(result);
});

module.exports = {
  getAllVideos,
  getVideoById,
  createNewVideo,
  updateVotes,
  updateViews,
};
