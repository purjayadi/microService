FROM node:current-alpine3.15
WORKDIR /inventory
COPY inventory/package.json ./package.json
RUN yarn install
EXPOSE 3001
CMD yarn dev