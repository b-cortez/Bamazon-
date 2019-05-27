-- Create a database called 'Bamazon' and switch into it for this activity --
DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE Bamazon;
USE Bamazon;

-- Create a table called 'products' which will contain the store inventory --
CREATE TABLE Products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	ProductName VARCHAR(30) NOT NULL,
	DepartmentName VARCHAR(20) NOT NULL,
	Price DECIMAL(10,2) NOT NULL,
	StockQuantity INTEGER(11) NOT NULL,
	PRIMARY KEY (ItemId)
);

-- Insert data into the 'products' table --
INSERT INTO Products (ItemId,ProductName, DepartmentName, Price, StockQuantity)
VALUES  (1,'Becho Dot', 'Smart Home', 49.99, 500),
		(2,'Bindle E-Reader', 'Electronics', 109.99, 300),
		(3,'Snapple EyePhone', 'Electronics', 999.99, 100),
		(4,'Rike Mens Shoes', 'Shoes', 69.99, 400),
		(5,'Bucci Leather Bag', 'Luggage & Travel Gear', 2,800.00, 100),
		(6,'Gray Bans', 'Accessories', 150.00, 500),
		(7,'Jen & Berry Ice Cream', 'Grocery', 3.25, 450),
		(8,'Flire TV Stick w/Balexa', 'Home Theater', 39.99, 200),
		(9,'Gove Face and Body Bar 2 pack', 'Personal Care', 7.50, 100),
		(10,'Luggies Diapers', 'Children', 12.75, 250),
		(11,'Yoga Mat', 'Sports', 12.75, 50);