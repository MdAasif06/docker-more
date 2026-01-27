FROM node:20-alpine

WORKDIR /tree
ADD . .

CMD [ "node","/tree/app.js" ]
