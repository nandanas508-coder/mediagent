# Use Nginx to serve the static files
FROM nginx:alpine

# Copy your HTML/CSS/JS files to the Nginx web folder
COPY . /usr/share/nginx/html

# Cloud Run expects the app to listen on port 8080.
# By default, Nginx listens on 80. This command switches it to 8080.
RUN sed -i 's/listen       80;/listen       8080;/g' /etc/nginx/conf.d/default.conf

# Expose port 8080
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
