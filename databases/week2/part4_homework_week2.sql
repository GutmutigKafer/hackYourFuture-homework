-- Part 4 Creating Tables

CREATE TABLE movies(
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    director VARCHAR(255) NOT NULL,
    description LONGTEXT NOT NULL,
    poster_url LONGTEXT NOT NULL
);

CREATE TABLE users(
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE genres(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    genre_name VARCHAR(255) NOT NULL
);
CREATE TABLE comments(
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    movie_id BIGINT NOT NULL,
    comment_text LONGTEXT NOT NULL,
    timestamp TIMESTAMP NOT NULL,
    CONSTRAINT fk_comments_user FOREIGN KEY(user_id) REFERENCES users(id),
    CONSTRAINT fk_comments_movie FOREIGN KEY(movie_id) REFERENCES movies(id)
);
CREATE TABLE ratings(
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    movie_id BIGINT NOT NULL,
    rating_value INT NOT NULL,
    CONSTRAINT fk_ratings_movie FOREIGN KEY(movie_id) REFERENCES movies(id),
     CONSTRAINT fk_ratings_user FOREIGN KEY(user_id) REFERENCES users(id)

);
CREATE TABLE movie_genres(
    movie_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    genre_id INT NOT NULL,
    CONSTRAINT fk_genres_genre_id FOREIGN KEY(genre_id) REFERENCES genres(id),
    CONSTRAINT fk_genres_movie_id FOREIGN KEY(movie_id) REFERENCES movies(id)
);
