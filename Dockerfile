FROM node:18.15.0

WORKDIR /app

COPY /app .

RUN npm install

EXPOSE 4000

CMD ["npm", "run", "start:dev"]
