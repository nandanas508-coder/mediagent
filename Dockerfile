# 1. Use Nginx
FROM nginx:alpine

# 2. Copy your web files
COPY . /usr/share/nginx/html

# 3. Create a custom config that listens on port 8080 (Required for Cloud Run)
# We overwrite the default file using 'echo' to avoid "sed" errors
RUN echo 'server { \
    listen 8080; \
    server_name localhost; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
    } \
}' > /etc/nginx/conf.d/default.conf

# 4. Expose the port
EXPOSE 8080

# 5. Start Nginx
CMD ["nginx", "-g", "daemon off;"]
