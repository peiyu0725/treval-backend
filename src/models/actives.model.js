import sqlite from '../db.js'

function list () {
    const sql = "SELECT * FROM actives"
    const res = sqlite.prepare(sql).all()
    return res
}

function get(value, key = 'id') {
    if (!value) return cd(new Error('缺少參數id'))
    const sql = `SELECT * FROM actives WHERE ${key} = $value`
    const param = {
        value
    }
    const res = sqlite.prepare(sql).get(param)
    return res
}

function add(data) {
    console.log(data)
    const sql = `
        INSERT INTO
        actives(title, tags, image, location, time, ticket, phone
        , address, url, content, traffic, precautions)
        VALUES($title, $tags, $image, $location, $time, $ticket, $phone
        , $address, $url, $content, $traffic, $precautions)`
    const res = sqlite.prepare(sql).run(data)
    return res
}

function update(data) {
    const sql = `
        UPDATE actives 
        SET title = $title, tags = $tags, image = $image, location = $location, time = $time
        , ticket = $ticket , phone = $phone , address = $address, url = $url
        , content = $content, traffic = $traffic, precautions = $precautions
        WHERE id = $id`
    const res = sqlite.prepare(sql).run(data)
    return res

}

function remove(id, cb) {
    if (!id) return cd(new Error('缺少參數id'))
    const res = sqlite.run("DELETE FROM actives WHERE id = ?", id)
    return res

}

export default { list, get, add, update, remove }