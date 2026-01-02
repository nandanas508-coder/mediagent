# 1. Build the code
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
# 'legacy-peer-deps' fixes common library conflict errors
RUN npm install --legacy-peer-deps

COPY . .
# This prevents the build from failing on small warnings (common in React)
ENV CI=false
RUN npm run build

# 2. Serve the code with a web server
FROM nginx:alpine
# COPY --from=builder /app/dist /usr/share/nginx/html
# IMPORTANT: If you use 'Create React App', change 'dist' to 'build' in the line below:
COPY --from=builder /app/dist /usr/share/nginx/html

# Cloud Run needs port 8080
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
