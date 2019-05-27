// Pull in required dependencies
var inquirer = require('inquirer');
var mysql = require('mysql');
// Define the MySQL connection parameters
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,

    // Your username
    user: 'root',

    // Your password
    password: 'root',
    database: 'Bamazon'
});

// inputValidation makes sure that the user supplies only positive integers for their input
function inputValidation(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Please enter a whole non-zero number.';
	}
}

// promptPurchase will prompt the user for the item/quantity they would like to purchase
function promptPurchase() {


    // Prompt the user to select an item
    inquirer.prompt([
        {
            type: 'input',
            name: 'ItemId',
            message: 'Please enter the Item ID which you would like to purchase.',
            validate: inputValidation,
            filter: Number
        },
        {
            type: 'input',
            name: 'quantity',
            message: 'How many do you need?',
            validate: inputValidation,
            filter: Number
        }
    ]).then(function (input) {
       

        var item = input.ItemId;
        var quantity = input.quantity;

        var queryStr = 'SELECT * FROM products WHERE ?';

        connection.query(queryStr, { ItemId: item }, function (err, data) {
            if (err) throw err;

            // If the user has selected an invalid item ID, data attay will be empty


            if (data.length === 0) {
                console.log('ERROR: Invalid Item ID. Please select a valid Item ID.');
                currentInventory();

            } else {
                var productData = data[0];


                if (quantity <= productData.StockQuantity) {
                    console.log('Congratulations, the product you requested is in stock! Placing order!');

                    var updateQueryStr = 'UPDATE products SET StockQuantity = ' + (productData.StockQuantity - quantity) + ' WHERE ItemId = ' + item;
                 

                    // Update the inventory
                    connection.query(updateQueryStr, function (err, data) {
                        if (err) throw err;

                        console.log("Your orders been placed! Your total is $" + productData.Price * quantity);
                        console.log('Thank you for shopping with us!');
                        console.log("\n---------------------------------------------------------------------\n");

                        connection.end();
                    })
                } else {
                    console.log('Sorry, we dont have enough in stock, your order cant be placed as is.');
                    console.log('Please modify your order.');
                    console.log("\n---------------------------------------------------------------------\n");

                    currentInventory();
                }
            }
        })
    })
}
// currentInventory will retrieve the current inventory from the database and output it to the console
function currentInventory() {

    queryStr = 'SELECT * FROM products';

    connection.query(queryStr, function (err, data) {
        if (err) throw err;

        console.log('Existing Inventory: ');
        console.log('...................\n');

        var strOut = '';
        for (var i = 0; i < data.length; i++) {
            strOut = '';
            strOut += 'Item ID: ' + data[i].ItemId + '  ||  ';
            strOut += 'Product Name: ' + data[i].ProductName + '  ||  ';
            strOut += 'Department: ' + data[i].DepartmentName + '  ||  ';
            strOut += 'Price: $' + data[i].Price + '\n';

            console.log(strOut);
        }

        console.log("---------------------------------------------------------------------\n");

        //Prompt the user for item/quantity they would like to purchase
        promptPurchase();
    })
}

function runBamazon() {

    // Display the available inventory
    currentInventory();
}

// Run the application
runBamazon();
