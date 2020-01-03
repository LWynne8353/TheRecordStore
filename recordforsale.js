var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "penn",
    database: "records_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    //loadProducts();
    recordTableView();
});
//allows viewers to see records for sale
function recordTableView() {
    inquirer
        .prompt({
            name: "music",
            type: "list",
            message: "Like to take a look at the vinyls?",
            choices: ["Yes", "No"]

        }).then(function (choose) {
            if (choose.music === "Yes") {
                displayRecords();
            }
            else if (choose.music === "No") {
                connection.end();
            }
        });

}
//displaying records for sale
function displayRecords() {
    var showRecords = "SELECT * FROM music";
    connection.query(showRecords, function (err, res) {
        if (err) throw err;
        console.table(res);
        askWhatVinyl(res);

    });
}
function askWhatVinyl(res) {
    inquirer
        .prompt({
            name: "choice",
            type: "input",
            message: "Select vinyl by the id number?",
        }).then(function (choose) {
            var id = parseInt(choose.choice)
            console.log(id);
            var record = "SELECT * FROM music WHERE ID = id";
            if (record) {
                howManyRecords(record)
            } else {
                console.log("All out, try another");
                displayRecords(res);
            }
        });
    }
function statusRecord(id, stock) {
    console.log(id);
    console.log(stock);
    for (i = 0; i < stock.length; i++); {
        if (stock[i].id === id) {
            console.log(stock)
            return stock[i];
        }
    }
    return null;
}
function howManyRecords(record) {
    inquirer
        .prompt({
            name: "quantity",
            type: "input",
            message: "How many would you like?"
        }).then(function (value) {
            var stock = parseInt(value.stock)
            if (stock > record.stock) {
                console.log("insuffient quantity")
                displayRecords()
            } else {
                buyRecords(record, stock)
            }
        });
}
function buyRecords(record){
    
}
