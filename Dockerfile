FROM node:22-slim

WORKDIR /hub-de-leitura-integrado

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]