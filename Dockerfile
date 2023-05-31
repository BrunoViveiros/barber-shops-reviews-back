FROM node:18.13.0-alpine

WORKDIR /app

ADD package*.json ./

RUN npm install

ADD ./src/index.js ./

CMD [ "node", "index.js"]