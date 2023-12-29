import sqlite from '../db.js'

function list () {
    const sql = "SELECT * FROM note"
    const res = sqlite.prepare(sql).all()
    return res
}

function get(value, key = 'id') {
    if (!value) return cd(new Error('缺少參數id'))
    const sql = `SELECT * FROM note WHERE ${key} = $value`
    const param = {
        value
    }
    const res = sqlite.prepare(sql).get(param)
    return res
}

function add(data) {
    const sql = `
        INSERT INTO
        note(title, tags, time, content, favorite, files, delete)
        VALUES($title, $tags, $time, $content, $favorite, $files, $delete)`
    const res = sqlite.prepare(sql).run(data)
    return res
}

function update(data) {
    const sql = `
        UPDATE note 
        SET title = $title, tags = $tags, time = $time, content = $content, 
        favorite = $favorite, files = $files, delete = $delete
        WHERE id = $id`
    const res = sqlite.prepare(sql).run(data)
    return res

}

function remove(id, cb) {
    if (!id) return cd(new Error('缺少參數id'))
    const res = sqlite.run("DELETE FROM note WHERE id = ?", id)
    return res

}

export default { list, get, add, update, remove }