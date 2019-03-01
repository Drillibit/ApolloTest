FROM node:10.15.2-alpine

RUN mkdir -p /srv/app/keeno-server
WORKDIR /srv/app/keeno-server

COPY package.json /srv/app/keeno-server
COPY yarn.lock /srv/app/keeno-server

RUN yarn

COPY . /srv/app/keeno-server

CMD ["yarn", "start"]