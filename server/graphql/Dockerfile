### BUILD PHASE ###
FROM node:alpine as builder

WORKDIR /usr/app

COPY package.json ./
RUN yarn install

COPY . .
RUN yarn build

### PACKAGING PHASE ###
# Specifies Node base image
FROM node:alpine

#Set working directory for all commands
WORKDIR /usr/app

COPY package.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install --production --pure-lockfile

#Copies build from previous build phase container to current container
COPY --from=builder /usr/app/dist ./

# Default Command
CMD ["node", "app.js"]

