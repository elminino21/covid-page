FROM nginx:1.19.2-alpine
COPY /dist/Covid-Front usr/share/nginx/html
#VOLUME $(pwd)/dist/Covid-Front usr/share/nginx/html
#overwrite
EXPOSE 80
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf