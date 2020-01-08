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
//asking which one they would like and how many. 
function askWhatVinyl() {
    inquirer
        .prompt([
        {
            name: "choice",
            type: "input",
            message: "Select vinyl by the id number?",
        },
        {
            name: "quantity",
            type: "input",
            message: "How many would you like?"

        }]).then(function (result) {
            var id = parseInt(result.choice)
            var quantity = parseInt(result.quantity);
            var showRecords = "SELECT * FROM music";
            connection.query(showRecords, function (err, res) {
                if (err) throw err;
                    
                for (i = 0; i <res.length; i++){

                    if (res[i].id === id){
                        //console.log(res[i].Stock);

                        if(res[i].Stock < quantity) {
                            console.log("All out, try another")
                        } else {
                            var newStock = res[i].Stock - quantity;
                            console.log("newstock:", newStock)
                            buyRecords(id, newStock, res[i].Price)
                        }
                    }

                }
            })
        });
}
//Update database
function buyRecords(record, stock, price) {
    connection.query("UPDATE music SET Stock = ? WHERE id = ?",
        [stock, record],
        function (err, res) {
            console.log("Thank you and enjoy your record(s)")
            yourGrandTotal(record, price);
        })
}
//Displays the grand total
function yourGrandTotal(record, price) {
    var total = record * price
    console.log("Vinyl Purchase" + total)
    recordTableView();
}
//         //connection.end();
