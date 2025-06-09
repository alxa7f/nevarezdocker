#Imagen base con Node
FROM node:18

#Establece directorio de trabajo
WORKDIR /app

#Copia archivos de configuración y dependencias
COPY package*.json ./
COPY .nycrc .nycrc

#Instala dependencias
RUN npm install

#Copia el resto del proyecto (incluye index.js, test/, etc.)
COPY . .

#Variable de entorno para pruebas
ENV NODE_ENV=test

#Comando por defecto (puedes sobrescribirlo si usas docker-compose)
CMD ["npm", "run", "coverage"]
