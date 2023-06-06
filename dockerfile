FROM --platform=amd64 node:16.15

COPY . /data

WORKDIR /data

RUN npm install

CMD [ "node", "." ]
