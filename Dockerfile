FROM node:16.15-alpine3.14
RUN mkdir -p /opt/biznewzapi
WORKDIR /opt/biznewzapi
COPY package*.json ./
RUN npm install
RUN npm install --save pm2
COPY . .
EXPOSE 5100
CMD [ "npm", "run", "pm2" ]