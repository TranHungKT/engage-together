# Build react app
FROM node:current-alpine3.22 AS build

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 3000

RUN yarn build

# Copy to nginx
FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY --from=build /app/build .

EXPOSE 80/tcp

ENTRYPOINT ["nginx", "-g", "daemon off;"]