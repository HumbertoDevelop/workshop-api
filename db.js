<<<<<<< HEAD
const carrito = require("./data/carrito.json");
const cursos = require("./data/cursos.json");
const especialidades = require("./data/especialidades.json");
const posts = require("./data/posts.json");
const signup = require("./data/signup.json");
const profesores = require("./data/profesores.json");
=======
const carrito = require("./data/carrito");
const cursos = require("./data/cursos");
const especialidades = require("./data/especialidades");
const posts = require("./data/posts");
const signup = require("./data/signup");
const profesores = require("./data/profesores");
const temario = require("./data/temario");
>>>>>>> master

module.exports = {
  carrito,
  cursos,
  especialidades,
  posts,
  signup,
  profesores,
<<<<<<< HEAD
=======
  temario,
>>>>>>> master
}


// const items = require("./data/items");

// module.exports = () => {

//   var tags = items.map((i) => i.tags);
//   tags = [].concat.apply([], tags);
//   tags = [...new Set(tags)];



//   var brands = items.map((i) => i.manufacturer);
//   brands = [...new Set(brands)];

//   var itemTypes = items.map((i) => i.itemType);
//   itemTypes = [...new Set(itemTypes)];

//   return {
//     items,
//     tags,
//     brands,
//     itemTypes,
//   };
// };
