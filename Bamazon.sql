-- Create a database called 'Bamazon' and switch into it for this activity --
DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE Bamazon;
USE Bamazon;

-- Create a table called 'products' which will contain the store inventory --
CREATE TABLE Products (
	ItemId INTEGER(11) AUTO_INCREMENT NOT NULL,
	ProductName VARCHAR(30) NOT NULL,
	DepartmentName VARCHAR(20) NOT NULL,
	Price DECIMAL(10,2) NOT NULL,
	StockQuantity INTEGER(11) NOT NULL,
	PRIMARY KEY (ItemId)
);

-- Insert data into the 'products' table --
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity)
VALUES  ('Becho Dot', 'Smart Home', 49.99, 500),
		('Bindle E-Reader', 'Electronics', 109.99, 300),
		('Snapple EyePhone', 'Electronics', 999.99, 100),
		('Rike Mens Shoes', 'Shoes', 69.99, 400),
		('Bucci Leather Bag', 'Travel Gear', 800.00, 100),
		('Gray Bans', 'Accessories', 150.00, 500),
		('Jen & Berry Ice Cream', 'Grocery', 3.25, 450),
		('Flire TV Stick w/Balexa', 'Home Theater', 39.99, 200),
		('Gove Face and Body Bar 2 pack', 'Personal Care', 7.50, 100),
		('Luggies Diapers', 'Children', 12.75, 250),
		('Yoga Mat', 'Sports', 12.75, 50);