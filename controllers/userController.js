const {response} = require('express')

const userGet = (req, res = response) => {

    const {q} = req.query // se desestructura lo que se quiera del query que se posee en la ruta

    res.json({
        msg: "get api - controller",
        q
    })
}

const userPut = (req, res) => {

    const {id} = req.params

    res.json({
        msg: "put api - controller",
        id
    })
}

const userPost = (req, res) => {

    const {nombre , edad} =  req.body // se obtienen los datos del body que solicita el use, tambien se desestructura la data que se quiere

    res.status(201).json({
        msg: "post api - controller",
        nombre, edad
    })
}

const userDelete = (req, res) => {
    res.json({
        msg: "delete api - controller"
    })
}

const userPatch = (req, res) => {
    res.json({
        msg: "patch api -  controller"
    })
}


module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete,
    userPatch
}