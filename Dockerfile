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
RUN rm /etc/nginx/conf.d/default.conf

COPY --from=build /app/build .
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80/tcp

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]