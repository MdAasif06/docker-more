FROM node:20-alpine

ADD app.js ./tree/app.js

CMD [ "node","/tree/app.js" ]
