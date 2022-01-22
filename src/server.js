const app = require("./app.js");
const cors = require("cors");

//Isto habilita que possamos acessar nossos endpoints
app.use(cors());

const port = 3333;

//Opção para o heroku utiliza a sua porta padrão
//para rodar a api
app.listen(process.env.PORT || port, () => {
  console.log(`App running on port: ${port}!`);
});