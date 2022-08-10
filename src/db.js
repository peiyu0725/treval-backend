import sqlite3 from 'sqlite3';

const SQLite3 = sqlite3.verbose();
const dbName = "treval.db"
const sqlite = new SQLite3.Database(dbName)

try {
    createTables()
} catch (error) {
    throw error
}

function createTables() {
    const sql = `
        CREATE TABLE IF NOT EXISTS actives (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            title TEXT NOT NULL, 
            tags TEXT DEFAULT NULL, 
            image TEXT DEFAULT NULL, 
            location TEXT DEFAULT NULL, 
            time TEXT DEFAULT NULL, 
            ticket TEXT DEFAULT NULL, 
            phone TEXT DEFAULT NULL, 
            address TEXT DEFAULT NULL, 
            url TEXT DEFAULT NULL, 
            content TEXT DEFAULT NULL, 
            traffic TEXT DEFAULT NULL, 
            precautions TEXT DEFAULT NULL
        )`
    sqlite.prepare(sql).run()
}

// sqlite.prototype.parse = function (obj, columns = []) {
//     if (!obj) return obj

//     for (const key of columns) {
//         obj[key] = JSON.parse(obj[key])
//     }
//     return obj
// }

export default sqlite