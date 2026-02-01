import sqlite3 from "sqlite3";

const SQLite = sqlite3.verbose();


function query(command, params = [], method = "all") {
    return new Promise(
        function (resolve, reject) {
            database[method](
                command,
                params,
                function (error, result) {
                    if(error) {
                        reject(error);
                    }
                    else {
                        resolve(result);
                    }
                }
            );
        }
    );
}


const database = new SQLite.Database(
    "./src/database/database.db",
    SQLite.OPEN_READWRITE,
    (err) => {
        if(err) {
            return console.log(err.message);
        }
    }
);

export { database, query }