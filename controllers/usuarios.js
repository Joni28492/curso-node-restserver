const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  // const query = req.query;
  const { q, nombre = "no name", apikey, page = "1", limit } = req.query;

  res.json({
    msg: "get API - usuariosGet",
    q,
    nombre,
    apikey,
    page,
    limit,
  });
};

const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body;
  //habria que hacer limpieza scripts o iyections
  res.json({
    msg: "post API - usuariosPost",
    nombre,
    edad,
  });
};
const usuariosPut = (req, res = response) => {
  // const  id  = req.params.id;
  const { id } = req.params;

  res.json({
    msg: "put API - usuariosPut",
    id,
  });
};
const usuariosPatch = (req, res = response) => {
  res.json({
    msg: "patch API - usuariosPatch",
  });
};
const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "delete API - usuariosDelete",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
};
