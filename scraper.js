var sqlite3 = require("sqlite3").verbose();
//var unique = require('uniq');

// Open a database handle
var db = new sqlite3.Database("data.sqlite");
db.serialize(function() {

  // Create new table
  db.run("CREATE TABLE IF NOT EXISTS data (name TEXT,value INT)");

  
  // Insert a new record
  var statement = db.prepare("INSERT INTO data VALUES (?,?)");
  var res = Math.round(Math.random()*100);
  if(res>60){statement.run("груша яблоко",res);}
  //else none;
  
  statement.finalize();
});

//var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log("hhg");
