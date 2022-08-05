import sqlite3 from 'sqlite3';

const SQLite3 = sqlite3.verbose();
const dbName = "mysqlite"
const db = new SQLite3.Database(dbName);

db.serialize(async () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS actives 
        (id integer primary key, title text, content text)`
    db.run(sql)
})

class Actives {
    static all(cb) {
        db.all("SELECT * FROM actives")
    }
    static find(id, cb) {
        if (!id) return cd(new Error('缺少參數id'))
        db.get("SELECT * FROM actives WHERE id = ?", id, cb)
    }
    static create(data, cb) {
        const sql = `
            INSERT INTO
            actives(title, content)
            VALUES(?, ?);
            select last_insert_rowid();`
        db.run(sql, data.title, data.content, cb)
    }
    static delete(id, cb) {
        if (!id) return cd(new Error('缺少參數id'))
        db.run("DELETE FROM actives WHERE id = ?", id, cb)
    }
    static update(id, cb) {
        const sql = `
            UPDATE actives 
            SET title = ?, content = ?
            WHERE id = ?`
        db.run(sql, id, cb)
    }
}

module.exports.Actives = Actives