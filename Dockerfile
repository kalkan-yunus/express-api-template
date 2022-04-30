FROM node:alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:alpine 
RUN npm install pm2 -g
WORKDIR /app
COPY --from=builder /app/dist/* .
EXPOSE 3000
ENTRYPOINT [ "pm2-runtime","./server.js" ]