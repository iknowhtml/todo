### BUILD PHASE ###
FROM node:alpine

WORKDIR /usr/app

COPY package.json .
RUN yarn install

COPY babel.config.js .

COPY src src

# Default Command
CMD ["yarn", "start"]

