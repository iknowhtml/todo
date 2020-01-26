FROM node:alpine

RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers autoconf automake make nasm python git && \
  npm install --quiet node-gyp -g

WORKDIR /usr/app

COPY babel.config.js .

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY src src

CMD ["yarn", "start"]