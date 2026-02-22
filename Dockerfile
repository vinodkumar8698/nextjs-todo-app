FROM node:20-alpine as runner

WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build
EXPOSE 8698
CMD [ "npm", "run", "start" ]