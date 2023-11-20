FROM node:latest
COPY backend-app/package*.json ./
RUN npm install
COPY  . .
EXPOSE 3000
ENV PORT=3000
CMD [ "node", "index.js" ]