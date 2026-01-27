FROM node:20-alpine

WORKDIR /tree
ADD . .

ENTRYPOINT [ "node" ]
CMD [ "app.js" ]
