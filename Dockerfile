FROM node:10.15.2-alpine

RUN mkdir -p /srv/app/keeno-client
WORKDIR /srv/app/keeno-client

COPY package.json /srv/app/keeno-client
COPY yarn.lock /srv/app/keeno-client

RUN yarn install

COPY . /srv/app/keeno-client

CMD ["yarn", "client"]
