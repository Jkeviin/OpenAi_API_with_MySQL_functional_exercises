

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
