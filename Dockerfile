FROM node:22-alpine AS build

WORKDIR /app

ARG NODE_TLS_REJECT_UNAUTHORIZED=1
ARG NPM_STRICT_SSL=true

ENV NODE_TLS_REJECT_UNAUTHORIZED=${NODE_TLS_REJECT_UNAUTHORIZED}
ENV npm_config_strict_ssl=${NPM_STRICT_SSL}

COPY package.json package-lock.json ./
RUN npm ci --fetch-retries=1 && test -x node_modules/.bin/vite

COPY . .
RUN npm run build

FROM nginx:1.27-alpine

ENV PORT=10000

COPY docker/nginx/default.conf.template /etc/nginx/templates/default.conf.template
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 10000
