//* Trying to refactor my MovieApp Details section into a class

class MovieDetails {
  constructor() {
    this.movieDetails = document.getElementById("movie-details");
    this.commentsSection = this.initializeCommentsSection();
    this.starRating = document.querySelectorAll(".star");

    this.currentMovie = null;
    this.selectedRating = 0;

    this.initializeEventListeners();
    this.initializeRatingStars();
  }
  initializeCommentsSection() {
    let commentsSection = document.getElementById("comments-section");
    if (!commentsSection) {
      commentsSection = document.createElement("div");
      commentsSection.id = "comments-section";
      commentsSection.innerHTML = ` <h3 id="comments-title">Leave a comment!</h3>
        <form class="comment-form">
      <input type="text" placeholder="Your name" required>
      <textarea placeholder="Your comment" required></textarea>
      <button type="submit">Post Comment</button>
    </form>
    <div class="comment-display" id="comment-display"></div>`;
      this.movieDetails.append(commentsSection);
    }
  }
}
