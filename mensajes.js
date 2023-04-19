// Importamos las librerías necesarias
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const mensajeCliente = async () => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Utilizando la inteligencia artificial, crea un mensaje personalizado que notifique al cliente sobre el estatus de su servicio. Incluye detalles como el tipo de servicio, el tiempo de espera estimado y cualquier información adicional relevante para el cliente.\n\nCliente: Juan Pérez\nServicio agendado: Lavado completo de automóvil\nHora agendada: 2:00 PM\n\nMensaje para el cliente:",
    temperature: 0.5,
    max_tokens: 300,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });

  console.log(response.data.choices[0].text);
}
//mensajeCliente();

const mensajeCliente2 = async () => {
  const prompt = `Un cliente ha agendado un servicio de lavado para su vehículo en nuestro sitio web. Utiliza el modelo de text-davinci-003 para generar un mensaje personalizado de confirmación para el cliente.

  Cliente: Juan Pérez
  Fecha del servicio: 22 de abril de 2023
  Hora del servicio: 10:00 a.m.
  Lavadero: Lavadero XYZ
  Servicio(s) solicitado(s): Lavado exterior, Aspirado interior

  Mensaje de confirmación:`;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.5,
    max_tokens: 128,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,

  });

  console.log(response.data.choices[0].text);
}

//mensajeCliente2();


