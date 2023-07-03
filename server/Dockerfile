FROM node

WORKDIR /api

COPY . ./

RUN npm i

ARG PORT=3000

EXPOSE ${PORT}

CMD [ "node", "index.js" ]