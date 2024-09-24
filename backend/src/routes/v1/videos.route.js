const router = require("express").Router();
const { videosController } = require("../../controllers/index");
const validate = require("../../middlewares/validate");
const videoValidation = require("../../validations/video.validation");

router.get(
  "/",
  validate(videoValidation.getVideos),
  videosController.getAllVideos
);

router.get(
  "/:videoId",
  validate(videoValidation.getVideoWithId),
  videosController.getVideoById
);

router.post(
  "/",
  validate(videoValidation.postVideo),
  videosController.createNewVideo
);

router.patch(
  "/:videoId/votes",
  validate(videoValidation.patchVotes),
  videosController.updateVotes
);

router.patch(
  "/:videoId/views",
  validate(videoValidation.patchViews),
  videosController.updateViews
);

module.exports = router;
