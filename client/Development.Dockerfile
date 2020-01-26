FROM node:alpine

WORKDIR /usr/app

COPY package.json .
COPY yarn.lock .

RUN yarn install --ignore-optional

COPY babel.config.js .
COPY webpack.config.babel.js .

COPY src src

CMD ["yarn", "start"]