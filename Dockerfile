FROM node:latest
WORKDIR /app
COPY backend-app/package*.json /app
RUN npm install
COPY  backend-app /app
EXPOSE 3000
ENV PORT=3000
CMD [ "node", "/app/index.js" ]