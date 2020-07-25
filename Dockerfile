FROM node:alpine

WORKDIR /app

COPY package.json /app

RUN npm install --save typescript@3.8.3

RUN npm install -g @angular/cli@9.1.1

RUN npm install

EXPOSE 4200

COPY . /app

CMD ["npm", "run", "start:dev"]