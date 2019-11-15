### BUILD PHASE ### 
FROM node:alpine as builder

WORKDIR /usr/app

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
FROM node:alpine

# Set working directory for all commands
WORKDIR /usr/app

COPY package.json .
COPY yarn.lock .

# Installs production dependencies only
RUN yarn install --production --frozen-lockfile

# Copies build from previous build phase container to current container
COPY --from=builder /usr/app/dist ./

EXPOSE 9090

# Default Command
CMD ["node", "app.js"]

