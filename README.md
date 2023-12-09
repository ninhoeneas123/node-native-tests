# Node-Native-Tests


Este é um projeto pessoal dedicado ao aprendizado e prática de desenvolvimento. 

O foco principal está na implementação de um CRUD básico para o módulo de usuário, juntamente com a integração de um banco de dados MongoDB utilizando o Prisma.

O diretório "tests" dentro do módulo de usuário contém um arquivo essencial chamado "users.test". Este arquivo é responsável pela configuração e execução dos testes de integração, os quais têm como alvo o arquivo "user.controller".

É importante notar que os testes são executados através do test-runner, um módulo nativo do Node.js, proporcionando uma abordagem eficiente e nativa para a realização de testes. Esta escolha destaca a simplicidade e a eficácia na execução dos testes no ambiente Node.js.

# Executando o Banco de Dados

Para executar o banco de dados, é necessário ter o Docker Compose instalado. Após a instalação, execute o comando:

```bash
docker-compose up 
```

# Iniciando o Servidor(opcional)

O próximo passo é iniciar o servidor com o comando:

```bash
npm run dev
```

# Executando os testes

Para executar os testes, utilize o seguinte comando:

```bash
npm test
```
