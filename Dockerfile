FROM node:14.15 AS build

WORKDIR /app
COPY ./api/package*.json ./
RUN npm i --prod

COPY ./api/dist .

RUN chown -R node:node .
USER node
ENTRYPOINT [ "node", "main" ]