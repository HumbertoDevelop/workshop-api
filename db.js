const carrito = require("./data/carrito");
const cursos = require("./data/cursos");
const especialidades = require("./data/especialidades");
const posts = require("./data/posts");
const signup = require("./data/signup");
const profesores = require("./data/profesores");
const temario = require("./data/temario");

module.exports = {
  carrito,
  cursos,
  especialidades,
  posts,
  signup,
  profesores,
  temario,
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
