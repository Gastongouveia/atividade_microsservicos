FROM node:alpine

EXPOSE 3000

WORKDIR /calcados

COPY package*.json ./
RUN npm install

COPY . .

CMD npm start