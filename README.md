

# Ejemplos en Node.js

Este repositorio contiene tres archivos en Node.js que utilizan la API de OpenAI para realizar diferentes tareas.

## sarcasmo.js
Este archivo contiene un ejemplo de cómo generar respuestas sarcásticas a través de la API de OpenAI. El programa crea una instancia de Marv, un empleado de LavaSoft grosero, y responde a preguntas con respuestas sarcásticas. Para usarlo, se necesita una clave de API de OpenAI y un archivo `.env` con la variable `OPENAI_API_KEY` establecida. 

## estado.js
Este archivo muestra cómo utilizar la API de OpenAI para clasificar el sentimiento en un comentario. El programa toma un comentario como entrada y devuelve una respuesta que indica si el sentimiento es positivo, negativo o neutral. Para usarlo, se necesita una clave de API de OpenAI y un archivo `.env` con la variable `OPENAI_API_KEY` establecida.

## categoria.js
Este archivo contiene un ejemplo de cómo utilizar la API de OpenAI y MySQL para categorizar productos automáticamente. El programa toma el nombre de un producto y consulta una base de datos MySQL para ver si ya tiene una categoría asignada. Si no tiene una categoría asignada, el programa genera una pregunta dinámica utilizando la API de OpenAI para que el usuario ingrese la categoría. Luego, el programa actualiza la base de datos con la nueva categoría. Para usarlo, se necesita una clave de API de OpenAI, una base de datos MySQL y un archivo `.env` con las variables `OPENAI_API_KEY`, `MYSQL_USER`, `MYSQL_PASSWORD`, `MYSQL_HOST` y `MYSQL_DATABASE` establecidas.

### Requerimientos
- Node.js
- Clave de API de OpenAI
- MySQL (para categoria.js y SQL.js)

### Instalación
1. Clonar el repositorio o descargar los archivos.
2. Ejecutar `npm install` para instalar las dependencias.
3. Crear un archivo `.env` y establecer las variables requeridas.
4. Ejecutar los archivos con `node`.

### Variables de entorno
- `OPENAI_API_KEY`: Clave de API de OpenAI.
- `MYSQL_USER`: Usuario de MySQL (solo para categoria.js y SQL.js)
- `MYSQL_PASSWORD`: Contraseña de MySQL (solo para categoria.js y SQL.js)
- `MYSQL_HOST`: Host de MySQL (solo para categoria.js y SQL.js)
- `MYSQL_DATABASE`: Nombre de la base de datos de MySQL (solo para categoria.js y SQL.js)
<hr>
<hr>

Un buen prompt es esencial para obtener respuestas precisas y relevantes de la inteligencia artificial. Aquí te presento una estructura detallada que puedes seguir para construir prompts efectivos:

1. Introducción:
   - Presenta la finalidad del prompt y el contexto en el que se utilizará.
   - Explica brevemente la tarea o el problema que deseas abordar.
   - Establece la importancia y relevancia del tema.

2. Definición de roles y contexto:
   - Identifica claramente quién es el usuario (la persona que interactúa con el modelo) y cuál es su objetivo.
   - Describe el modelo de IA y su capacidad para proporcionar respuestas.
   - Establece el conocimiento o la información previa que el modelo tiene a su disposición.

3. Instrucciones para el usuario:
   - Especifica las acciones que el usuario debe llevar a cabo para interactuar con el modelo.
   - Proporciona pautas claras y detalladas sobre cómo formular las preguntas o solicitudes.
   - Enfatiza la importancia de ser específico, directo y utilizar un lenguaje natural coherente.

4. Ejemplos de interacción:
   - Proporciona ejemplos concretos de preguntas o solicitudes junto con las respuestas esperadas.
   - Incluye ejemplos de preguntas que podrían resultar en respuestas insatisfactorias y explica por qué.
   - Muestra cómo se pueden reformular las preguntas para obtener mejores resultados.

5. Consideraciones adicionales:
   - Discute posibles limitaciones del modelo de IA y cómo pueden afectar las respuestas.
   - Ofrece consejos o trucos para optimizar la calidad de las respuestas.
   - Describe estrategias para manejar escenarios en los que el modelo podría ofrecer respuestas incorrectas o inapropiadas.

6. Resumen y cierre:
   - Recapitula los puntos clave del prompt y destaca las recomendaciones importantes.
   - Proporciona recursos adicionales o referencias para que el usuario profundice en el tema.
   - Anima al usuario a experimentar y explorar diferentes enfoques y variaciones en el uso del modelo.

Aquí tienes un ejemplo más técnico de cómo estructurar un prompt:

```
Introducción:
En este prompt, utilizaremos el modelo de IA "GPT-3.5" para generar descripciones detalladas de imágenes. El objetivo es crear textos descriptivos convincentes que capturen la esencia de la imagen proporcionada. La tarea es relevante en aplicaciones como la generación automática de subtítulos para imágenes o la descripción de productos en sitios web de comercio electrónico.

Definición de roles y contexto:
El usuario de este prompt es un diseñador de sitios web que desea mejorar la experiencia visual de sus productos. El modelo GPT-3.5 es una poderosa herramienta de IA capaz de generar texto coherente y relevante. El modelo tiene acceso a una gran cantidad de información obtenida de Internet y puede utilizar ese conocimiento para generar descripciones precisas.

Instrucciones para el usuario:
1. Proporcione una imagen o una descripción clara de la imagen a la que desea generar una descripción.
2. Formule una pregunta o solicitud específica sobre la imagen.
3. Utilice un lenguaje natural claro y coherente al interactuar con el modelo.
4. Si los resultados no son satisfactorios, intente reformular la pregunta

 o proporcionar más detalles relevantes.

Ejemplos de interacción:
Imagen: [adjunta una imagen de una playa soleada con palmeras]
Pregunta del usuario: "Por favor, genera una descripción atractiva para esta imagen."
Respuesta esperada: "Una hermosa playa de arena dorada se extiende bajo el sol radiante, mientras las altas palmeras mecidas por la brisa añaden un toque tropical a la escena. El agua cristalina del océano invita a sumergirse en un refrescante chapuzón."

Imagen: [adjunta una imagen de un perro jugando en un parque]
Pregunta del usuario: "Escribe una descripción divertida para esta imagen."
Respuesta esperada: "¡Un perro animado y juguetón se divierte en el parque! Con su cola enérgicamente en movimiento y su lengua colgando hacia un lado, el perro disfruta de la libertad y la alegría de correr por el césped verde mientras interactúa con otros perros y personas que lo rodean."

Consideraciones adicionales:
- El modelo puede generar descripciones que sean coherentes con la imagen proporcionada, pero no puede "ver" la imagen en sí.
- Proporcione detalles adicionales relevantes, como la hora del día, el entorno o los elementos destacados en la imagen, para obtener descripciones más precisas y detalladas.
- Experimente con diferentes estilos y enfoques para generar descripciones que se ajusten a sus necesidades y preferencias.

Resumen y cierre:
Al seguir estas pautas, podrás obtener descripciones atractivas y detalladas utilizando el modelo GPT-3.5. Recuerda ser claro y específico en tus solicitudes, y no dudes en experimentar con diferentes enfoques. ¡Diviértete explorando las capacidades de la IA y mejorando tus proyectos de diseño web!
```

Recuerda adaptar el prompt según el contexto y el objetivo específico de tu proyecto. Además, ten en cuenta que los ejemplos y las instrucciones pueden variar dependiendo de la tarea o la aplicación que estés abordando con la inteligencia artificial.
