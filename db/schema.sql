
DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burger (
    id INT NOT NULL AUTO_INCREMENT ,
    burger_name VARCHAR(45) NOT NULL,
    devoured BOOL DEFAULT false,
    
    PRIMARY KEY (id)
);


INSERT INTO burger (burger_name, devoured) VALUES ('Cheese Burger', FALSE);
INSERT INTO burger (burger_name, devoured) VALUES ('Hamburger', FALSE);
INSERT INTO burger (burger_name, devoured) VALUES ('Pizza Burger', FALSE);
