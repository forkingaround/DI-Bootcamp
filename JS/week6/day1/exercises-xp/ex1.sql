-- Add two tables:
-- items
-- customers.

-- CREATE TABLE items (
-- 	item_id INT PRIMARY KEY,
-- 	item_name VARCHAR(50),
-- 	item_price DECIMAL(10,2)
-- );

-- Add the following items to the items table:
-- 1 - Small Desk – 100 (ie. price)
-- 2 - Large desk – 300
-- 3 - Fan – 80
-- INSERT INTO items(item_id, item_name, item_price) VALUES 
-- 	(1, 'Small Desk', 100),
-- 	(2, 'Large Desk', 300),
-- 	(3,'Fan', 80);
	


-- ----------------------------------------------
-- CREATE TABLE customers (
-- 	customer_id INT PRIMARY KEY,
-- 	customer_fname VARCHAR(50),
-- 	customer_lname VARCHAR(50)
-- );

-- Add 5 new customers to the customers table:
-- 1 - Greg - Jones
-- 2 - Sandra - Jones
-- 3 - Scott - Scott
-- 4 - Trevor - Green
-- 5 - Melanie - Johnson

-- INSERT INTO customers(customer_id, customer_fname, customer_lname) VALUES
-- 	(1, 'Greg', 'Jones'),
-- 	(2, 'Sandra', 'Jones'),
-- 	(3, 'Scott', 'Scott'),
-- 	(4, 'Trevor', 'Green'),
-- 	(5, 'Melanie', 'Johnson');
	


-- Use SQL to fetch the following data from the database:
-- All the items.
-- SELECT * FROM items;

-- All the items with a price above 80 (80 not included).
-- SELECT * FROM items WHERE item_price > 80;

-- All the items with a price below 300. (300 included)
-- SELECT * FROM items WHERE item_price <= 300;

-- All customers whose last name is ‘Smith’ (What will be your outcome?).
-- SELECT * FROM customers WHERE customer_lname = 'Smith';
-- Outcome none: no customer by that name

-- All customers whose last name is ‘Jones’.
-- SELECT * FROM customers WHERE customer_lname = 'Jones';

-- All customers whose firstname is not ‘Scott’.
-- SELECT * FROM customers WHERE customer_fname != 'Scott';