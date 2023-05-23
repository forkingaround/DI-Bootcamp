-- CREATE TABLE FirstTab (
--      id integer, 
--      name VARCHAR(10)
-- );

-- INSERT INTO FirstTab VALUES
-- (5,'Pawan'),
-- (6,'Sharlee'),
-- (7,'Krish'),
-- (NULL,'Avtaar');

-- SELECT * FROM FirstTab;

-- CREATE TABLE SecondTab (
--     id integer 
-- );

-- INSERT INTO SecondTab VALUES
-- (5),
-- (NULL);

-- SELECT * FROM SecondTab;


-- EXERCISE STARTS HERE --
--------------------------

-- Q1. What will be the OUTPUT of the following statement?

--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL );
	
-- Expectation : 3
-- Result : 0
-- NULL is not a value and cannot be compared

-- Q2. What will be the OUTPUT of the following statement?

--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 );
	
-- Expectation: 2
-- Result: 2
-- Again, NULL not counted as it has no value

-- Q3. What will be the OUTPUT of the following statement?

--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab );
	
-- Expectation: 0
-- Result: 0
-- Inner selection returns a NULL and no comparison can be made

-- Q4. What will be the OUTPUT of the following statement?

--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL );
	
-- Expectation: 2
-- Result: 2
