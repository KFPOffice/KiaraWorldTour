# syntax=docker/dockerfile:1

FROM node:14.17.4 as builder
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build
RUN ls

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]