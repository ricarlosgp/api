//IMPORTANDO EXPRESS = importando todas as funcionalidades do arquivo express que está dentro da pasta node_modules e colocando na variável const express
const express = require("express");

//INICIALIZANDO EXPRESS = após criar o require("express") eu preciso inicializar ele para poder utiliza-lo
const app = express();

//DEFININDO O Nº DA PORTA ONDE O API VAI FICAR OBSERVANDO E ESPERANDO REQUISIÇÕES PARA DEVOLVER ESSAS RESPOSTAS = preciso falar para o express em qual porta, endereço que ele vai atender as solicitações
const PORT = 3333; //criei uma variável constante pois caso tenhamos que mudar de porta 3333 para outra então é só mudar aqui
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
//fique escutando(listen) nesse endereço(PORT), e quando a aplicação(app.) for iniciada execute() essa mensagem no terminal=> console.log(`Server is running on Port ${PORT}`)).
//para testar a aplicação, salve o arquivo, abra o terminal do vsc e digita dentro do diretório C:\Users\DEV RICARLOS\Desktop\api> node src/server.js
//Server is running on Port 3333 essa mensagem deverá aparecer
// para evitar digitar o node src/server.js vamos startar um script dentro do package.Jason para testar essa aplicação