# Stage 1, Name the node stage "builder"
FROM node AS builder
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build


# Stage 2, nginx state for serving content
FROM nginx:alpine
# Copy static assets from builder stage
COPY --from=builder /app/build /var/www

#Copy nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf

#Expose port to listen outside
EXPOSE 80

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
