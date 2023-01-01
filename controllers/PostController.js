const pool = require('../DataBase');
const validation = require('../helpers/validation');

const createPost = async (req, res) => {
  const isValid = validation.createPostValidation(req, res);
  if (isValid === false) return;
  const payload = req.body;
  const query =
    'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *'; //consulta sql
  const values = [
    payload.titulo,
    payload.url,
    payload.descripcion,
    payload.likes,
  ]; //los valores que se van a insertar en la base de datos de esta forma se evita el sql injection
  const result = await pool.query(query, values);
  res.json(result.rows);
};

const getPosts = async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM posts');
  res.json(rows);
};
const deletePost = async (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM posts WHERE id = $1';
  const value = [id];

  const resultDelet = await pool.query(query, value);
  res.json(resultDelet);
};

module.exports = {
  createPost,
  getPosts,
  deletePost,
};
