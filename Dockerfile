FROM nginx

COPY ./nginx/ /etc/nginx/conf.d/
COPY ./dist/ /etc/nginx/html/

EXPOSE 80
