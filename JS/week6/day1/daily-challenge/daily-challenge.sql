-- CREATE TABLE actors(
-- 	actor_id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR (50) NOT NULL,
-- 	last_name VARCHAR (100) NOT NULL,
-- 	age DATE NOT NULL,
-- 	number_oscars SMALLINT NOT NULL
-- );

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES 
-- 	('Emma', 'Watson', '1990-04-15', 1),
-- 	('Scarlett', 'Johansson', '1984-11-22', 2),
-- 	('Brad', 'Pitt', '1963-12-18', 1),
-- 	('Leonardo', 'DiCaprio', '1974-11-11', 1),
-- 	('Tom', 'Hanks', '1956-07-09', 2);

-- In this exercise we will be using the actors table from todays lesson.
-- 1. Count how many actors are in the table.
-- SELECT COUNT(*) AS row_count FROM actors;

-- 2. Try to add a new actor with some blank fields. 

-- INSERT INTO actors (first_name, last_name, number_oscars)
-- VALUES
-- 	('John','','1967/04/25',0);
-- SELECT * FROM actors;

-- What do you think the outcome will be ?
-- It gives an error when some fields are blank but I can still put an empty string