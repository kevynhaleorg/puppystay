FROM node:latest

RUN apt-get update
RUN apt-get install -y net-tools
RUN mkdir -p /var/www/puppystay
COPY / /var/www/puppystay

WORKDIR /var/www/puppystay

RUN npm install

EXPOSE 8123

CMD ["node", "server.js"]