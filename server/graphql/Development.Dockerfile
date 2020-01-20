FROM node:alpine

RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers autoconf automake make nasm python git && \
  npm install --quiet node-gyp -g

WORKDIR /usr/app

COPY package.json .
COPY yarn.lock .
COPY babel.config.js .

RUN yarn install

COPY src src

CMD ["yarn", "start"]