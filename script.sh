#! /usr/bin/bash

docker compose down

cd server/

docker rmi api:1

docker build -t api:1 .

cd ..

docker compose up --detach

docker cp devices.json mongo-onprem:/home/devices.json

docker exec mongo-onprem mongoimport -d provisioning -c devices --jsonArray --file /home/devices.json

docker exec mongo-onprem rm /home/devices.json

sudo apt install nginx npm -y

cd client/

npm i

npm run build
npm run start

cd ..

sudo cp default /etc/nginx/sites-enabled/default

sudo service nginx restart