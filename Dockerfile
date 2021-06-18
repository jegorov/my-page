# Stage 1, Name the node stage "builder"
FROM node AS builder
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build


# Stage 2, nginx state for serving content
FROM nginx:alpine
# Set working directory to nginx asset directory
#WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
#RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/build /var/www
# Containers run nginx with global directives and daemon off

COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
