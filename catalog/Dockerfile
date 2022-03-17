FROM node:current-alpine3.15
WORKDIR /catalog
COPY catalog/package.json ./package.json
RUN yarn install
EXPOSE 3000
CMD yarn dev