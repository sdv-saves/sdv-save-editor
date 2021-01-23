FROM node:14.15 AS build

WORKDIR /app
COPY ./api/dist .

ENTRYPOINT [ "node", "main" ]