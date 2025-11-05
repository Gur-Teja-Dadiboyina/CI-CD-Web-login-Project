# Simple static site served by NGINX
FROM nginx:1.27-alpine

# Remove default content and add our web assets
RUN rm -rf /usr/share/nginx/html/*
COPY . /usr/share/nginx/html/

EXPOSE 80
# nginx:alpine provides default command (nginx -g 'daemon off;')
