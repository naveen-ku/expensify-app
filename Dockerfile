FROM node:lts-alpine3.14

WORKDIR '/app'
COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN npm i -g sass
COPY . .

RUN ["chmod","+x","entrypoint.sh"]
# ENTRYPOINT  ./entry.sh
# CMD ["npm","run","build:dev"]
CMD ["/bin/sh", "entrypoint.sh"]