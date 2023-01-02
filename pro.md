#### REVISANDO ALGUNS CONCEITOS
para ocultar algum arquivo no .gitignore é preciso alterar algo no arquivo a ser ocultado e salvar e só após isso é que sincronizamos com o GitHub


#### Instale o node.js em https://nodejs.org/en/ e crie uma pasta para o projeto chamado de API. Após isso, execute os comandos abaixo

#### 1º CRIANDO, INICIANDO PROJETO NODEJS
    1.1 crie uma pasta para o projeto chamado de API
    1.2 no terminal navegue até a pasta ou diretório API e execute o comando npm init -y para inicializar pacote padrão do nodes.js
    vai ser criado um arquivo chamado package.json que contêm todas as informações básicas de um projeto nodes.js

#### 2º RECEBENDO, PROCESSANDO, DEVOLVENDO RESPOSTAS DE REQUISIÇÕES HTTP SOLICITADAS ATRAVÉS DO EXPRESS
    criando a pasta node_modules contendo o arquivo express
    2.1 npm install express --save (no terminal VSC execute esse comando para instalar a pasta node_modules e o arquivo package-lock.json
    (esse arquivo não pode deletar)  dentro do projeto API. Nessa pasta contêm: módulos, bibliotecas, express etc. para ser utilizado no projeto.
    2.2 .gitignore (crie esse arquivo e dentro dele digite o nome da pasta node_modules e pro.doc para não ser enviado para o GitHub pois essa
    pasta é muito pesada )
#### 3º IMPORTANDO, INICIALIZANDO, DEFININDO PORTA, UTILIZANDO O EXPRESS
    crie uma pasta na raiz do projeto chamada SRC e dentro da pasta crie um arquivo chamado server.js e execute os comandos dentro   desse arquivo
    3.1 const express = require(“express”); importando todas as funcionalidades do arquivo express que está dentro da pasta node_modules e colocando
    na variável const express
    3.2 const app = express();  após criar o require("express") eu preciso inicializar o express com esse comando para poder utilizá-lo
    3.3 const PORT = 3333; //criei uma variável constante pois caso tenhamos que mudar de porta 3333 para outra então é só mudar aqui.Defini o nº da
    porta onde o API VAI FICAR OBSERVANDO E ESPERANDO REQUISIÇÕES PARA DEVOLVER ESSAS RESPOSTAS ou seja, preciso falar para o express em qual porta,
    endereço que ele vai atender as solicitações.
    3.4 app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`)); essa função lê-se assim: fique escutando(listen) nesse endereço(PORT),
    e quando a aplicação(app.) for iniciada execute() essa mensagem no terminal=> console.log(`Server is running on Port ${PORT}`)).
    //para testar a aplicação, salve o projeto API, abra o terminal do vsc e digita dentro do diretório C:\Users\DEV RICARLOS\Desktop\api> node src/server.js
    e deverá aparecer a mensagem: Server is running on Port 3333 
    // para evitar digitar o node src/server.js vamos criar um scrit para startar dentro do package.jason para testar essa aplicação e usar o comando
    npm start no terminal. Dentro do package.jason na linha de "scripts" digite o código abaixo:

    "scripts": {
    "start": "node ./src/server.js" //execute no terminal o comando npm start
    },

#### 4º EXECUTANDO A APLICAÇÃO EXPRESS
    Após criar o script, execute a aplicação pelo terminal utilizando o comando abaixo:
    4.1 npm start 
#### 5º ROTAS E MÉTODOS DE REQUISIÇÕES OU HTTP VERBS
    Até o passo 4 ainda não está recebendo requisição e nem respondendo nada. Ela só está informando que as requisições estão sendo atendidas pela por 3333
    e para isso precisamos das rotas que é o caminho entre o front-en e o back-end(API).
    Ex: o front-end do meu site quer acessar algum recurso do meu servidor(que é o back-end e também API) como por exemplo, fazer uma autenticação de usuário,             digitando o e-mail e senha dele clicando no botão entrar para acessar o sitema. Então, essa senha está indo para o servidor que é a nossa API, verificando
    se de fato esse usuário e senha existem. Só que para o site saber onde está esse servidor, ele precisa de um endereço, de uma identificação, de uma rota
    para chegar nesse servidor API onde está aramazenado o meu site.
    Para se comunicar com API exitem padrões de comunicação para que a API saiba o que você está solicitando e te retornar. 
    
    Os métodos de requisições ou verbos HTTP são:

    GET = leitura (ex: para ver os detalhes de um produto )
    POST = criação (ex: para criar um novo produto )
    PUT = atualização (ex: para atualizar um valor ou o nome ou a quantidade disponível de um produro  )
    DELETE = deleção (ex: excluir um produto)
    PATCH = atualização parcial (ex: para atualizar algo específico do produto como por exemplo, somente a foto do produto)     

#### 5.1 PRATICANDO O MÉTODO GET(leitura)
    5.1.1 no server.js abaixo da linha do const app=express() faça uma aero function:

    app.get("/", (request, response) => {
        response.send(`Hello, World!`)
    })

    obs: temos nosso app ou API ou aplicação utilizando o express(app=express()) e o express é quem nos ajuda a gerenciar as requisições HTTP que nesse caso
    é uma requisição do tipo GET(leitura) ou seja, alguém está querendo ler algo. Esse "/" estou informando o enderço, a rota que é a raiz da API. Dessa função
    irei extrair duas informações: request(que é a requisição que foi feita) e response(que é o recurso que eu posso utilizar para fazer a resposta).
    response.send("Hello, world!");  // aqui estou ulizando o response para enviar(send) uma mensagem "Hello, world!" para quem solicitou essa rota "/"   
    5.1.2 npm start  //testando com o comando npm start dentro da raiz do projeto. Abra o navegaro e digite o endereço: localhost:3333 se tudo tiver correto, vai         apresentar a mensagem Hello, world!
