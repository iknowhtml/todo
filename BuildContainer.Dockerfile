FROM docker/compose:1.25.0-rc4-alpine

# Install Git & OpenSSH
RUN apk add --no-cache git openssh-client

# Install node.js
RUN apk add --update npm

#Install Lerna
RUN npm install -g lerna

CMD [ "sh" ]
