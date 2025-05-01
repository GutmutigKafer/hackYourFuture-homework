
CREATE DATABASE hyf_lesson2;
USE hyf_lesson2;

CREATE TABLE class (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    begins DATE,
    ends DATE
);

CREATE TABLE student (
    id INT,
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(255),
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES class(id)
);

CREATE INDEX idx_name ON student(name);

ALTER TABLE class ADD status ENUM('not-started', 'ongoing', 'finished');

SELECT * FROM class;