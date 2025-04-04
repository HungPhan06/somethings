# 1.
FROM node:18 AS build

# 2.
WORKDIR /app

# 3.
COPY package*.json ./

# 4.
RUN npm install

# 5.
COPY . .

# 6.
RUN npm run build

# 7.
FROM nginx:alpine

# 8.
COPY --from=build /app/build /usr/share/nginx/html

# 9.
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]