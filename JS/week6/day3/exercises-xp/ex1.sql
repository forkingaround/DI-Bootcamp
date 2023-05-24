-- Exercise 1: DVD Rental
------------------------------------------------
-- 		Get a list of all film languages.

-- SELECT name FROM language;


-- 		Get a list of all films joined with their languages – 
-- 		select the following details : 
-- 		film title, description, and language name. 

-- SELECT film.title, film.description, language.name AS language
-- FROM film
-- INNER JOIN language
-- ON film.language_id = language.language_id;


-- 		Try your query with different joins:
-- 		Get all films, even if they don’t have languages.

-- SELECT film.title, film.description, language.name AS language
-- FROM film
-- LEFT OUTER JOIN language
-- ON film.language_id = language.language_id;

-- 		Get all languages, even if there are no films in 
-- 		those languages.

-- SELECT film.title, film.description, language.name AS language
-- FROM film
-- RIGHT OUTER JOIN language
-- ON film.language_id = language.language_id;

-- 		Create a new table called new_film with the following columns : id, name. 
-- 		Add some new films to the table.

-- DROP TABLE IF EXISTS new_film;
-- CREATE TABLE new_film (
-- 	film_id SERIAL PRIMARY KEY,
-- 	name VARCHAR(100) NOT NULL
-- );
-- INSERT INTO new_film (name) VALUES
-- (E'Star Wars 7: The Empire\'s new death star fucks because of a SQL query'),
-- ('Emmanuel 22'),
-- ('Lilo and Stitch smoke a blunt');

-- SELECT * FROM new_film;


-- 		Create a new table called customer_review, which will contain film 
-- 		reviews that customers will make.
-- 		Think about the DELETE constraint: if a film is deleted, its review 
-- 		should be automatically deleted.
-- 		It should have the following columns:
-- 		review_id – a primary key, non null, auto-increment.
-- 		film_id – references the new_film table. The film that is being 
-- 		reviewed.
-- 		language_id – references the language table. What language the 
-- 		review is in.
-- 		title – the title of the review.
-- 		score – the rating of the review (1-10).
-- 		review_text – the text of the review. No limit on the length.
-- 		last_update – when the review was last updated.

-- DROP TABLE IF EXISTS customer_review;
-- CREATE TABLE customer_review (
--     review_id SERIAL PRIMARY KEY,
--     film_id INT REFERENCES new_film(film_id) ON DELETE CASCADE,
--     language_id INT REFERENCES language(language_id),
--     title VARCHAR(255),
--     score INT CHECK (score >= 1 AND score <= 10),
--     review_text TEXT,
--     last_update TIMESTAMP
-- );


-- 		Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

-- INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
-- VALUES
--     (1, 1, 'Great movie!', 9, 'I really enjoyed this movie. The acting was fantastic.', CURRENT_TIMESTAMP),
--     (2, 2, 'Disappointing', 5, E'The movie didn\'t meet my expectations. It lacked depth.', CURRENT_TIMESTAMP);

-- 		Delete a film that has a review from the new_film table, what happens to the 
-- 		customer_review table? 

-- DELETE FROM new_film WHERE film_id = 1;
-- Corresponding row is deleted in customer_review because of ON DELETE CASCADE
SELECT * FROM new_film;