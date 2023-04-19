const mysql = require('mysql');
const { Configuration, OpenAIApi } = require('openai');
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Configurar la conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'AI2',
});

// Conectar a la base de datos
connection.connect();

// Definir la función para obtener la categoría de un producto
function obtenerCategoria(producto) {
  return new Promise((resolve, reject) => {
    // Consultar la base de datos para ver si el producto ya tiene categoría
    connection.query(`SELECT categoria FROM productos WHERE producto='${producto}'`, async (error, results, fields) => {
      if (error) {
        reject(error);
      } else if (results.length > 0) {
        // Si ya tiene categoría, devolverla
        resolve(results[0].categoria);
      } else {
        // Si no tiene categoría, generar la pregunta dinámica
        const prompt = `El siguiente producto no tiene categoría asignada: ${producto}\n\nPor favor ingrese la categoría: `;
        const response = await openai.createCompletion({
          model: 'text-davinci-003',
          prompt: prompt,
          temperature: 0.5,
          max_tokens: 64,
          n: 1
        })
        // Actualizar la base de datos con la categoría ingresada
        const categoria = response.data.choices[0].text.trim();
        connection.query(`INSERT INTO productos (producto, categoria) VALUES ('${producto}', '${categoria}')`, (error, results, fields) => {
          if (error) {
            reject(error);
          } else {
            resolve(categoria);
          }
        });
      }
    });
  });
}

// Ejemplo de uso con una lista de productos
const productos = ['Avion', 'Cuaderno', 'Perro', 'Oso', 'Ega'];
productos.forEach(producto => {
  obtenerCategoria(producto).then((categoria) => {
    console.log(`La categoría del producto ${producto} es: ${categoria}`);
  }).catch((error) => {
    console.error(error);
  });
});