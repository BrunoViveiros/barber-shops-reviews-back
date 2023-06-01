FROM node:18.13.0-alpine

ENV NODE_ENV=production

ENV PORT=3000

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

EXPOSE $PORT

CMD [ "node", "src/index.js" ]