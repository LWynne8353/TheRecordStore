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
            choices: ["Yes" , "No"]

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
        askWhatVinyl();

});
}
function askWhatVinyl() {
    inquirer
    .prompt({})
}
