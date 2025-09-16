# Stage 1: Build Angular App
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build Angular app for production
RUN npm run build -- --output-path=dist/browser

# Stage 2: Serve with Nginx
FROM nginx:latest

COPY --from=build /app/dist/browser/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
