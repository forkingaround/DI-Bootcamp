-- Database: Hollywood

-- DROP DATABASE IF EXISTS "Hollywood";

-- CREATE DATABASE "Hollywood"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- CREATE TABLE actors(
-- 	actor_id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR (50) NOT NULL,
-- 	last_name VARCHAR (100) NOT NULL,
-- 	age DATE NOT NULL,
-- 	number_oscars SMALLINT NOT NULL
-- )

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Matt','Damon','08/10/1970', 5);
-- VALUES('George','Clooney','06/05/1961', 2);
-- VALUES ('Sharon','Stone','03/01/1960','3');
-- VALUES ('Sandra','Bullock','11/23/1967','4');
-- VALUES ('John','Malcovic','11/23/1964','8'),
-- ('Phillip','Thomas','11/23/1958','4'),
-- ('Jason','Bourne','11/23/1977','2');
SELECT * FROM actors;
-- SELECT
-- 	*
-- FROM
-- 	actors
-- LIMIT 4;
-- SELECT * FROM actors ORDER BY last_name DESC LIMIT 4;
-- SELECT
-- 	first_name, last_name
-- FROM
-- 	actors
-- WHERE
-- 	first_name
-- ILIKE
-- 	'%o%';
-- SELECT first_name, last_name, number_oscars FROM actors WHERE number_oscars >= 5;