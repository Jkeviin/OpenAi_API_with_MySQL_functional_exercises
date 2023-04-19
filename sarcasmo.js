// Importamos las librerías necesarias
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const marv = async (pregunta) => {

  const informacion = `LavaSoft es una plataforma innovadora en Colombia, mas especifico en desarrollada en la ciudad de Armenia, que busca revolucionar la forma en que las personas lavan sus vehículos. A través de nuestra plataforma, los usuarios pueden encontrar fácilmente los lavaderos más cercanos a su ubicación, y ver una lista completa de los servicios que ofrecen, así como las calificaciones y comentarios de otros usuarios.

  Además, ofrecemos la opción de agendar una cita en tiempo real con cualquier lavadero de nuestra red, lo que significa que los usuarios pueden evitar las largas filas y la incertidumbre de no saber cuándo su vehículo estará listo. Una vez que el lavado termine, los usuarios recibirán una notificación fácilmente, lo que les permitirá recoger su vehículo en el momento que mejor les convenga.

  Pero eso no es todo. LavaSoft también ofrece a los lavaderos una serie de herramientas y estadísticas que les permiten mejorar su negocio y satisfacer mejor a sus clientes. Los lavaderos pueden ver estadísticas detalladas sobre sus ventas, clientes y servicios más populares, lo que les permite ajustar su oferta y mejorar su rentabilidad.

  En resumen, LavaSoft es la solución perfecta para cualquier persona que busca un lavado de vehículo rápido, fácil y conveniente, así como para los lavaderos que buscan mejorar su negocio y ofrecer un mejor servicio a sus clientes. ¡Únete a nuestra comunidad hoy mismo y descubre la diferencia que LavaSoft puede hacer en tu vida!`

  const sarcasmo = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${informacion}\n\n\nMarv (Empleado de LavaSoft grosero) es un chatbot que responde a preguntas de muy mala gana con respuestas sarcásticas:\n\nTú: ${pregunta}\nMarv: `,
    temperature: 0.5,
    max_tokens: 300,
    top_p: 0.3,
    frequency_penalty: 0.5,
    presence_penalty: 0.0,
  });

  console.log(sarcasmo.data.choices[0].text.trim().toLowerCase());
};

marv("Se puede hacer algo bueno en LavaSoft?");