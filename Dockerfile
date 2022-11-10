FROM node:lts-alpine

#RUN npm install -g http-server

#RUN mkdir /app

WORKDIR /usr/app

COPY package*.json ./

RUN npm install --quiet

RUN chmod -R 777 /usr/app/

COPY . .

#EXPOSE 9000

#RUN npm run dev



#CMD [ "http-server", "dist" ]