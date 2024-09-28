const axios = require('axios');
const http = require('http');

const url = 'https://ecf-mobile-backend-latest.onrender.com/ping';

const sendRequest = async () => {
  try {
    const response = await axios.get(url);
    console.log('Requisição enviada:', response.data);
  } catch (error) {
    console.error('Erro ao enviar requisição:', error.message);
  }
};

setInterval(sendRequest, 14 * 60 * 1000);

sendRequest();

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Cron Job em execução!\n');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});
