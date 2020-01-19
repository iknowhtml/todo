### BASE ###
FROM node:alpine as base

RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers autoconf automake make nasm python git && \
  npm install --quiet node-gyp -g

WORKDIR /usr/app

### BUILD PHASE ### 
FROM base as builder

COPY package.json .
COPY yarn.lock .

# Installs all dependencies including for development
RUN yarn install

COPY babel.config.js .
COPY webpack.config.babel.js .
COPY src ./src

RUN yarn build

### PACKAGING PHASE ###
# Specifies Node base image
FROM base

# Set working directory for all commands
WORKDIR /usr/app

COPY package.json .

# Installs production dependencies only
RUN yarn install --production --frozen-lockfile

# Copies build from previous build phase container to current container
COPY --from=builder /usr/app/dist ./

EXPOSE 9090

# Default Command
CMD ["node", "app.js"]

