FROM node:alpine
RUN npm install pm2 -g
WORKDIR /app
COPY package.json .
RUN npm install --only=prod
COPY . .
EXPOSE 3000
ENTRYPOINT [ "pm2-runtime","./dist/server.js" ]