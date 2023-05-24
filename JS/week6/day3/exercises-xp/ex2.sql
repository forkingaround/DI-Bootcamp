-- Exercise 2 : DVD Rental
---------------------------------------------------------

-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
-- UPDATE film SET language_id = 2 WHERE film_id = 3;
-- UPDATE film SET language_id = 3 WHERE film_id = 4;
-- UPDATE film SET language_id = 4 WHERE film_id = 5;
-- UPDATE film SET language_id = 5 WHERE film_id = 6;


-- Which foreign keys (references) are defined for the customer table? 

-- SELECT
--     tc.constraint_name,
--     tc.constraint_type,
--     kcu.column_name,
--     ccu.table_name AS foreign_table_name,
--     ccu.column_name AS foreign_column_name
-- FROM
--     information_schema.table_constraints AS tc
-- JOIN
--     information_schema.key_column_usage AS kcu
--     ON tc.constraint_name = kcu.constraint_name
--     AND tc.table_schema = kcu.table_schema
-- JOIN
--     information_schema.constraint_column_usage AS ccu
--     ON ccu.constraint_name = tc.constraint_name
--     AND ccu.table_schema = tc.table_schema
-- WHERE
--     tc.table_name = 'customer'
--     AND tc.constraint_type = 'FOREIGN KEY';

-- ChatGPT says to put in the above code. No idea what is going on ??!

-- How does this affect the way in which we INSERT into the customer table?
-- Fuck knows! I'm lost. How do I even know when a table uses foreign keys
  

-- We created a new table called customer_review. Drop this table. 
-- DROP TABLE customer_review;

-- Is this an easy step, or does it need extra checking?
-- I have no idea

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)

-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.