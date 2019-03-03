FROM node:10.15.2-alpine

RUN mkdir -p /srv/app/keeno-server
WORKDIR /srv/app/keeno-server

COPY package.json /srv/app/keeno-server
COPY yarn.lock /srv/app/keeno-server

RUN npm install -g nodemon

RUN yarn install

COPY . /srv/app/keeno-server

CMD ["nodemon", "server.js"]
