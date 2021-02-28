    transpile-only não verificar erro na tipagem em tempo real, pois o VSCode já faz isso
    ignore-watch node_modules ignorar tudo que estiver acontecendo no node_modules

Banco de dados:

    PK - primary key, utilizaremos um UUID como identificador primário
    FK - foreign key, chaves que são extendidas de uma tabela

Em DB, não existe dados do tipo 'string', o que for string deve ser setado como tipo 'varchar'.


como server.ts estava antes de limpar atribuindo os métodos para o router:
/**
 * GET => Busca
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração específica
 *
*
*// http://localhost:3333/users
*
*app.get("/", (request, response) => {
*    return response.json({ message: "Hello World - NLW04" });
*});
*
*// 1 parâmetro => rota(recurso API)
*// 2 paâmetro => request, response
*
*app.post("/", (request, response) => {
*    //Recebeu dados para salvar
*    return response.json({ message: "Os dados foram salvos com sucesso!" });
*})
*/



import { v4 as uuid } from "uuid"
importar a versão 4 do uuid com o nome uuid para facilitar o uso
o uso foi realizado no corpo do if  como "this.id = uuid()"

Repository (referente ao controller de usuários)
é um Entity Manager, permite que faça ações dentro do DB, permite manipulação de dados

Testes Automatizados

1- Testes unitários - vão testar determinada funcionabilidade da aplicação (serviço, função específica, etc.)
Utilizado normalmente quando estamos fazendo o TDD (desenvolvimento de código voltado a teste)

2 - Testes de integração - testa a funcionabilidade completa da aplicação
ex.: precisamos testar a criação de usuários, o que vamos fazer? Testar todo o fluxo da aplicação
-> request -> routes -> controllers -> repositories
<- repositories <- controllers <- response

3 - Ponta a Ponta (E2E) - testa toda a ação do usuário na aplicação, mais utilizado para aplicações frontend