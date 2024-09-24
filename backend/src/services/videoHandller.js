const VideoSchema = require("../models/video.model");

class VideoOperations {
  getVideosByTitle_genre_contentRating = async (query) => {
    const genre = query.genres.split(",");
    const regexArray = genre.map((g) => new RegExp(g, "i"));
    const result = await VideoSchema.find({
      $and: [
        { title: { $regex: new RegExp(query.title), $options: "gi" } },
        { genre: { $in: regexArray } },
        { contentRating: { $regex: new RegExp(query.contentRating) } },
      ],
    });
    return result;
  };

  getVideoByTitleOrGenreOrRatingOrSortBy = async (query) => {
    let result;
    if (query.title) {
      result = this.filteredByTitle(query.title);
    } else if (query.genres) {
      result = this.filteredByGenres(query.genres);
    } else if (query.contentRating) {
      result = this.filteredByRating(query.contentRating);
    } else if (query.sortBy) {
      result = this.sortedBy(query.sortBy);
    }

    return result;
  };

  filteredByTitle = async (title) => {
    let result = await VideoSchema.find({
      title: { $regex: new RegExp(title), $options: "gi" },
    });
    return result;
  };

  filteredByGenres = async (genres) => {
    let genre = genres.split(",");
    let regexArray = genre.map((g) => new RegExp(g, "i"));

    let result = await VideoSchema.find({
      genre: { $in: regexArray },
    });

    return result;
  };

  filteredByRating = async (rating) => {
    let result = await VideoSchema.find({ contentRating: rating });
    return result;
  };

  sortedBy = async (sortBy) => {
    let sorted;
    let data = await VideoSchema.find({});
    if (sortBy === "viewCount") {
      sorted = data.sort((a, b) => b.viewCount - a.viewCount);
    } else if (sortBy === "releaseDate") {
      sorted = data.sort(
        (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
      );
    }
    return sorted;
  };
}

module.exports = { VideoOperations };
