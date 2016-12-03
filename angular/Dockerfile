FROM tutum/nginx
MAINTAINER Kevyn Hale

RUN rm /etc/nginx/sites-enabled/default
ADD nginx/ /etc/nginx/sites-enabled

COPY ./puppystay/dist/ /var/www/angular
RUN mkdir /var/www/angular/images
COPY ./puppystay/src/images /var/www/angular/images

COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]

EXPOSE 80

CMD ["nginx"]