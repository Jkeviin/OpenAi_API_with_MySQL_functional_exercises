const mysql = require('mysql2/promise');
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

// Configuración de la API de OpenAI
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generarSQL = async () => {

  // Configuración de la conexión a la base de datos MySQL
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'AI'
  });

  const prompt = "Cree una solicitud SQL para encontrar todos los 'usuarios' que contengan una z en su nombre:"

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt,
    max_tokens: 64,
    n: 1,
  });

  const sql = response.data.choices[0].text;

  console.log(sql);

  // Ejecutamos la consulta
  const [rows, fields] = await connection.execute(sql);

  // Imprimimos los resultados
  console.log(rows);
}

generarSQL();