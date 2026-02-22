FROM node:20-alpine AS runner

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 8698
CMD [ "npm", "run", "start" ]
