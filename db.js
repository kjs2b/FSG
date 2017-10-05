const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./fsg_challenge.db');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS metrics (" +
    "id INTEGER PRIMARY KEY, " +
    "title VARCHAR(255))");
});

db.run("INSERT INTO metrics (id, title) VALUES (124, 'Working Title')");

var results = db.all("SELECT * FROM metrics", (err, row) => {
  console.log(row);
});