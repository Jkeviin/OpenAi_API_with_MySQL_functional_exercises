// Importamos las librerías necesarias
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const classifyComment = async (comment) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Classify the sentiment in this comment:\n\n${comment}\n\nSentiment:`,
    temperature: 0,
    max_tokens: 1,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });

  console.log(response.data.choices[0].text.trim().toLowerCase());
};

// Ejemplo de uso

const comment = "Hay peliculas mejores, pero está buena.";
classifyComment(comment);

