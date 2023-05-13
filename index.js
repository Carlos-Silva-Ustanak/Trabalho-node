const express = require("express");
const { param } = require("express/lib/application");
const req = require("express/lib/request");
const res = require("express/lib/response");

const app = express();

app.use(express.json());

const lista = ["Marcos", "Alisson", "Alvaro", "Gabriel", "Eduardo"];
/* app.use((req, res, next)=>{

  console.log("acesso ao middlewares");

next();
//hello
});
 */
/* function valContato(req, res, next){

if(!req.body.email){
return res.json({
  erro:true,
  mensagem:"necessário enviar o email"
});

};

return next();

}; */

app.get("/", (req, res) => {
  console.log("acessou a rota listar");
  res.send("hello world!");

});

app.get("/contato/:id", (req, res) => {
  const { id } = req.params;
 
  return res.json(lista[id]);
});

app.post("/contato",(req, res) => {
  console.log("acessou a rota cadastrar")
  var { nome } = req.body;
  
lista.push(nome);

  return res.json(
    lista
  );
});

app.get("/contato",(req, res) => {

  return res.json(lista);

});

app.put("/contato/:id", (req, res) => {
  const { id } = req.params;
  const { nome} = req.body;

lista[id] = nome;

  return res.json(lista);

});

app.delete("/contato/:id", (req,res)=>{

const {id} = req.params;

lista.splice(id, 1);

return res.json({
message: "item deletado"
});

})
app.listen(8080, () => {
  console.log("Porta funcionando");
});

//tha's it