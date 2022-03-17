FROM node:current-alpine3.15
WORKDIR /gateway
COPY gateway/package.json ./package.json
RUN yarn install
EXPOSE 8000
CMD yarn start