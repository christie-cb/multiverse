-- Run sqlite3 restaurant_table.db ".read main.sql"

PRAGMA foreign_keys = ON;
.mode column
.headers on

CREATE TABLE IF NOT EXISTS companies(
  companyID INTEGER PRIMARY KEY,
  name TEXT,
  logoUrl TEXT
);

CREATE TABLE IF NOT EXISTS locations(
  locationID INTEGER,
  companyID INTEGER,
  name TEXT,
  capacity TEXT,
  manager TEXT,
  PRIMARY KEY (locationID),
  FOREIGN KEY (companyID) REFERENCES companies(companyID)
);

CREATE TABLE IF NOT EXISTS menus(
  menuID INTEGER,
  companyID INTEGER,
  title TEXT,
  PRIMARY KEY (menuID),
  FOREIGN KEY (companyID) REFERENCES companies(companyID)
);

-- companies
INSERT INTO companies (name, logoUrl)
VALUES ("McDonalds", "https://bit.ly/mcds");

INSERT INTO companies (name, logoUrl) 
VALUES ("Subway", "https://bit.ly/sw");

INSERT INTO companies (name, logoUrl) 
VALUES ("ICCO", "https://bit.ly/sw");

-- locations
INSERT INTO locations (companyID, name, capacity, manager) 
VALUES (1, "Penzance", 100, "Richard");

INSERT INTO locations (companyID, name, capacity, manager) 
VALUES (1, "Ely", 200, "Rosanna");

INSERT INTO locations (companyID, name, capacity, manager) 
VALUES (2, "Kingston upon Thames", 120, "Robert");

INSERT INTO locations (companyID, name, capacity, manager) 
VALUES (2, "Peterborough", 150, "Rachel");

INSERT INTO locations (companyID, name, capacity, manager) 
VALUES (3, "Bridgewater", 190, "Rory");

INSERT INTO locations (companyID, name, capacity, manager) 
VALUES (3, "Bournemouth", 118, "Romilly");

-- menus
INSERT INTO menus (companyID, title)
VALUES (1, "Saver Menu");

INSERT INTO menus (companyID, title)
VALUES (1, "Vegan & Vegetarian");

INSERT INTO menus (companyID, title)
VALUES (1, "Happy Meals!");

INSERT INTO menus (companyID, title)
VALUES (2, "Sandwiches");

INSERT INTO menus (companyID, title)
VALUES (2, "Drinks");

-- Update --
UPDATE locations
SET manager = "Rupert"
WHERE locationID = 1;
-- update locations w/ a column for spare capacity


-- Joins & nested queries --

-- -- Which locations have a menu?
-- SELECT locations.companyID, locations.name
-- FROM locations
-- INNER JOIN menus on locations.companyID=menus.companyID;

-- Print average capacity
SELECT AVG(capacity) 
FROM locations;

-- The names of the managers for high capacity locations
SELECT locations.name, locations.manager, locations.capacity FROM locations WHERE capacity > 
(SELECT AVG(capacity) FROM locations);

-- Company name and their locations if they have a menu
SELECT companies.name, locations.name FROM companies
JOIN locations ON companies.companyID=locations.companyID
WHERE (
  SELECT companies.companyID FROM companies
  JOIN menus ON locations.companyID=menus.companyID
);
